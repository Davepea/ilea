'use client'

import React, { useEffect, useRef, useState } from 'react'
import Button from '@/components/Button'
import Link from 'next/link'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import Image from 'next/image'
import { BiCart } from 'react-icons/bi'
import { useCart, CartPopup, CartAlert } from './CartSystem'

type UserSession = {
  id?: string
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

type NavbarProps = {
  session: UserSession | null
}

const navItems = ['Shop', 'About', 'Community', 'Collection']

const Navbar = ({ session }: NavbarProps) => {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)

  const navContainerRef = useRef<HTMLDivElement | null>(null)
  const audioElementRef = useRef<HTMLAudioElement | null>(null)
  const cartButtonRef = useRef<HTMLButtonElement | null>(null)

  const { y: currentScrollY } = useWindowScroll()
  const { toggleCart, cartCount } = useCart() // Access cart context

  useEffect(() => {
    if (!navContainerRef.current) return

    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    if (!navContainerRef.current) return

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    const audio = audioElementRef.current
    if (!audio) return

    if (isAudioPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isAudioPlaying])

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    
    // Create a ripple effect on the cart button
    if (cartButtonRef.current) {
      gsap.fromTo(
        cartButtonRef.current,
        { scale: 0.95 },
        { scale: 1, duration: 0.2, ease: 'power1.out' }
      )
    }
    
    toggleCart()
  }

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    })
    
    window.location.href = '/'
  }

  return (
    <>
      <div
        ref={navContainerRef}
        className='fixed inset-x-0 top-4 z-50 h-12 border-none transition-all duration-700 sm:inset-x-6 text-white'
      >
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
          <nav className='flex size-full items-center justify-between p-4'>
            {/* Logo Section */}
            <div className='flex items-center gap-7'>
              <div className='flex gap-[2px] items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-8 text-[#FD5E53]'
                >
                  <path d='M15 3.75H9v16.5h6V3.75ZM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5ZM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 0 1-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875Z' />
                </svg>
                <div className='md:flex hidden gap-[2px]'>
                  <b className='font-title font-bold text-3xl'>ILEA</b>
                  <small>&#xae;</small>
                </div>
              </div>
            </div>

            {/* Nav Items */}
            <div className='hidden md:block'>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='nav-hover-btn'
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className='flex h-full items-center gap-3'>
              <div className='ml-10 flex gap-4 items-center'>
                {session?.user ? (
                  <>
                    <Link href={`/user/${session.id}`}>
                      <div className='flex h-[30px] bg-white text-black items-center'>
                        <div>
                          <span>{session.user.name}</span>
                        </div>
                        <div className='w-[27px] h-[27px] overflow-hidden rounded-sm'>
                          <Image
                            src={session.user.image || ''}
                            className='w-full h-full object-cover'
                            alt='avatar'
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </Link>
                    <button onClick={handleLogout} className='text-white underline text-sm'>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href='#' className='nav-hover-btn'>
                      Log in
                    </Link>
                    <Button
                        id='product-button'
                        title='Sign Up'
                        containerClass='bg-white/10 backdrop-blur-md flex gap-3 text-white md:flex items-center justify-center gap-1'
                        rightIcon={undefined}
                        leftIcon={undefined}
                    />
                  </>
                )}
                
                {/* Cart Button with Counter */}
                <button 
                  ref={cartButtonRef}
                  className="relative p-2" 
                  onClick={handleCartClick}
                  aria-label="Open cart"
                >
                  <BiCart size={22} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center bg-[#FD5E53] text-white rounded-full w-5 h-5 text-xs font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>

                <button
                  className='music flex items-center space-x-0.5'
                  onClick={toggleAudioIndicator}
                >
                  <audio
                    ref={audioElementRef}
                    className='hidden'
                    src='/audio/loop.mp3'
                    loop
                  />
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`indicator-line cursor-pointer ${
                        isIndicatorActive ? 'active' : ''
                      }`}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    
      {/* Cart Alert Notification */}
      <CartAlert />
      
      {/* Cart Popup */}
      <CartPopup />
    </>
  )
}

export default Navbar