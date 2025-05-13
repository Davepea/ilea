
// import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { auth } from '@/auth'
import Footer from '@/components/Footer';


const layout = async ({ children }: { children: ReactNode}) => {
  const session = await auth();

  // if(!session) redirect('/sign-in')
  return <main className='root-container'>
    <div className=' mx-auto max-w-7xl'>
        {/* <Header session={session}/> */}
        <Navbar session={session} />
        <div className=' '>
            {children}

        </div>
   

    </div>
  </main>
}

export default layout