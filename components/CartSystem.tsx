'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react'
import { BiX, BiTrash } from 'react-icons/bi'
import gsap from 'gsap'
import Image from 'next/image'

// Define types
export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  toggleCart: () => void
  closeCart: () => void
  cartCount: number
  cartTotal: number
  showAlert: boolean
  alertMessage: string
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Cart Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  // State for cart items and UI
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error)
    }
  }, [])

  // Save cart to localStorage when items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  // Calculate cart totals
  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  // Show alert notification
  const triggerAlert = (message: string) => {
    setAlertMessage(message)
    setShowAlert(true)
    
    // Auto-hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  // Cart actions
  const addToCart = (newItem: CartItem) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id)
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        triggerAlert(`Added another ${newItem.name} to your cart`)
        return updatedItems
      } else {
        // Add new item
        triggerAlert(`Added ${newItem.name} to your cart`)
        return [...prevItems, newItem]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id)
      if (itemToRemove) {
        triggerAlert(`Removed ${itemToRemove.name} from your cart`)
      }
      return prevItems.filter(item => item.id !== id)
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    triggerAlert('Cart cleared')
  }

  const toggleCart = () => {
    setIsCartOpen(prev => !prev)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      toggleCart,
      closeCart,
      cartCount,
      cartTotal,
      showAlert,
      alertMessage
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook for using cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// Cart Alert Component
export function CartAlert() {
  const { showAlert, alertMessage } = useCart()
  const alertRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showAlert && alertRef.current) {
      // Animate alert in and out
      gsap.fromTo(
        alertRef.current,
        { 
          y: -50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.3,
          onComplete: () => {
            gsap.to(alertRef.current, {
              opacity: 0,
              delay: 2.5,
              duration: 0.3
            })
          }
        }
      )
    }
  }, [showAlert])

  if (!showAlert) return null

  return (
    <div 
      ref={alertRef}
      className="fixed bottom-10 right-6 z-50 flex items-center bg-black text-white px-4 py-3 rounded-md shadow-lg"
    >
      <div className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2CFF05]">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-sm font-medium">{alertMessage}</p>
    </div>
  )
}

// Cart Popup Component
export function CartPopup() {
  const { 
    isCartOpen, 
    closeCart, 
    items, 
    removeFromCart, 
    updateQuantity,
    clearCart,
    cartTotal
  } = useCart()
  
  const cartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cartRef.current) {
      if (isCartOpen) {
        // Animate cart opening
        gsap.fromTo(
          cartRef.current,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
      } else {
        // Animate cart closing
        gsap.to(
          cartRef.current,
          { x: '100%', opacity: 0, duration: 0.3, ease: 'power2.in' }
        )
      }
    }
  }, [isCartOpen])

  // Handle click outside to close cart
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node) && isCartOpen) {
        closeCart()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isCartOpen, closeCart])

  if (!isCartOpen) return null

  return (
    <div className="!fixed max-h-screen inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm">
      <div 
        ref={cartRef}
        className="bg-white w-full max-w-md h-full shadow-lg flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-3xl font-bold text-black">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-gray-600 hover:text-black"
          >
            <BiX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 mb-4 text-gray-300"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div 
                  key={item.id} 
                  className="flex items-center border-b pb-4"
                >
                  <div className="w-20 h-20 relative bg-gray-100 mr-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium !font-authur text-black">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center mt-2 text-black">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center  bg-gray-100 rounded-2xl"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center ">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-2xl"
                      >
                        +
                      </button>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-gray-500 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <BiTrash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-4 text-black">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={clearCart}
                className="flex-1 py-2 px-4 border border-gray-300 hover:bg-gray-50 rounded-full"
              >
                Clear Cart
              </button>
              <button 
                className="flex-1 py-2 px-4 bg-black text-white hover:bg-gray-800 rounded-full"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
