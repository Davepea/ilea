import { signOut } from '@/auth'
import React from 'react'

const SignOut = () => {

    const handleSignOut = async ()=>{
        await signOut({redirect: '/'})
    }
    
  return (
    <>
    <button onClick={handleSignOut}>SignOut</button>
    </>
  )
}

export default SignOut