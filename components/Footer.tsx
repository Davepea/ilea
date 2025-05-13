import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <section className='md:px-20 py-30 bg-[#242424]'>
       <div className='grid md:grid-cols-5 grid-cols-1 p-10 py-12 bg-[#101010]'>
        <div className='col-span-1 bg-white'>
          <Image
            src="/img/Looking.jpeg"
            alt="email"
            height={400}
            width={230}
            className='h-full w-full object-cover'
          />
        </div>
         <div className='bg-[#101010] text-center p-10 flex flex-col gap-14 col-span-3'>
            <div>
                <h1 className='text-6xl pb-4'>
                    Stay Raw. Stay First.
                </h1>
                <p className='max-w-[450px] m-auto'>
                Get early access to drops, behind-the-scenes stories, and exclusive identity content.
                </p>
            </div>
            <form action="">
                <input type="text" className='bg-white' />
                <button type="submit">Join the List →</button>
            </form>
        </div>
        <div className=' col-span-1 bg-white md:block hidden'>
           <Image
            src="/img/Looking2.jpeg"
            alt="email"
            height={400}
            width={230}
             className='h-full w-full object-cover'
          />
        </div>
       </div>
    </section>
    <footer className='bg-[#101010] p-20 relative'>
      <div className='absolute bottom-0 right-0 z-20'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8 text-[#fff]'
              ></svg>
      </div>
      <div className='grid grid-cols-5'>
        <div className='col-span-2'>
          <div>
            <div>
               <div className='flex gap-[2px] items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8 text-[#fff]'
              >
                <path d='M15 3.75H9v16.5h6V3.75ZM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5ZM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 0 1-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875Z' />
              </svg>
              <div className='md:flex hidden gap-[2px]'>
                <b className='font-title font-bold text-3xl'>ILEA</b>
                <small>&#xae;</small>
              </div>
            </div>

            </div>
          </div>
        </div>
        <div className='col-span-3'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
       
              <div>
                <h2 className="text-gray-400 font-bold mb-4 tracking-widest">SHOPS</h2>
                <ul className="space-y-2 font-mono">
                  <li>NEW ARRIVAL</li>
                  <li>MENS</li>
                  <li>WOMENS</li>
                  <li>WINTER</li>
                </ul>
              </div>

              {/* Brand */}
              <div>
                <h2 className="text-gray-400 font-bold mb-4 tracking-widest">BRAND</h2>
                <ul className="space-y-2 font-mono">
                  <li>ABOUT</li>
                  <li>CONTACT</li>
                  <li>BLOG</li>
                </ul>
              </div>

            
      
             </div>
        </div>
      </div>
      

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs font-mono gap-4">
        <p>© COPYRIGHT ROGUE 2025. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF USE</a>
        </div>
      </div>
    </footer>
    <div className=" bg-no-repeat h-[40vh] bg-fixed bg-c">

    </div>
    
    </>
  )
}

export default Footer