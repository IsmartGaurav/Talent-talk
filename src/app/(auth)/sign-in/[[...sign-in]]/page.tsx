import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-md mx-auto">
        <SignIn 
          appearance={{
            baseTheme: dark,
            variables: { colorPrimary: '#0070f3' }
          }}
        />
      </div>
    </div>
  )
}

export default SignInPage