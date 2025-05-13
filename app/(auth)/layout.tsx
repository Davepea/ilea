// import { auth } from '@/auth'

// import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'


const layout = async ({ children }: { children: ReactNode}) => {
  // const session = await auth();

  // if(!session) redirect('/sign-in')
  return <main className='root-container'>
    <div className=' mx-auto max-w-7xl'>
        {/* <Header session={session}/> */}
   
        <div className=''>
            {children}

        </div>

    </div>
  </main>
}

export default layout