import React from 'react'
import Image from 'next/image'

const NewsLetter = () => {
  return (
    <>
        <section className=''>
       <div className='grid md:grid-cols-2 grid-cols-1 md:h-screen  bg-[#101010]'>
        <div className='col-span-1 bg-[#FD5E53]  p-10 md:px-20 flex flex-col gap-14 py-20 justify-between relative'>
          <div className=' absolute top-0 bottom-0 right-0 left-0'>
            <Image
            src="https://images.pexels.com/photos/7974875/pexels-photo-7974875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="email"
            height={1000}
            width={1000}
            className='h-full w-full object-cover'
          />
          </div>
          <div className=' relative z-10 flex flex-col gap-14  justify-between h-full  '>
           <p className=" text-gray-300">
                  This isn’t just fashion—it’s identity. Join the ones who wear their truth like armor.
                </p>
                <div className=" mt-10  ">
                  <a
                    href="/start"
                    className="px-6 py-3 text-white bg-[#FD5E53] rounded-full hover:bg-gray-800 transition"
                  >
                    Start Expressing →
                  </a>
                
                </div>
          </div>
        </div>
        {/* https://img.freepik.com/free-photo/black-white-portrait-beautiful-woman-posing-indoors-dress_23-2149630169.jpg?uid=R119642972&ga=GA1.1.1231999960.1747660063&semt=ais_hybrid&w=740 */}
       <div className='bg-[#101010] relative'>
            <div className=' absolute top-0 bottom-0 right-0 left-0'>
                <Image
                src="https://images.pexels.com/photos/6069075/pexels-photo-6069075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="email"
                height={1000}
                width={1000}
                className='h-full w-full object-cover grayscale-100 '
              />
            </div>
           <div className='relative z-10  p-10 flex flex-col md:px-20  gap-14 py-20 justify-between h-full  '>
             <div className='flex flex-col gap-20'>
               <div>
                <h1 className='text-6xl pb-4'>
                    Stay Raw. Stay First.
                </h1>
               
            </div>
            
            <div>
               <p className='max-w-[450px] '>
                Get early access to drops, behind-the-scenes stories, and exclusive identity content.
                </p>
            </div>
            </div>
           
            <form action="" className='bg-[#ffffff49] backdrop-blur-2xl flex md:flex-row  rounded-full  overflow-hidden max-w-[450px]' >
                <input type="text" className=' p-3 w-full  px-4 rounded-l-full text-white' />
                <button type="submit" className='bg-[#FD5E53] px-3 py-3  flex w-[290px]'>Join the List</button>
            </form>
           </div>
        </div>
       </div>
    </section>
    </>
  )
}

export default NewsLetter