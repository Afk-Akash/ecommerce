import React, { useState } from 'react'
import Login from './Login.jsx' 
import Signup from './Signup'

const LoginSignup = () => {
  const [isLoginOrSingup, setIsLoginOrSignup] = useState(true)
  return (
    <div>
      {
        isLoginOrSingup ? <Login setIsLoginOrSignup={setIsLoginOrSignup}/> : <Signup setIsLoginOrSignup={setIsLoginOrSignup}/>
      }
      
    </div>
  )
}

export default LoginSignup