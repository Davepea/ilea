import React, { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode}) => {

  return <main className='root-container'>
    <div className=' mx-auto max-w-7xl mt-20'>
      {children}
    </div>
  </main>
}

export default layout