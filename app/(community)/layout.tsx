import React, { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode}) => {
  // if(!session) redirect('/sign-in')
  return <main className='root-container'>
    
    <div className=' '>
        <div className=' '>
           
            {children}
        </div>
    </div>
      
  </main>
}

export default layout