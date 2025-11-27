import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasswor] = useState("")
  const [error, setError] = useState(null)
  
  const handleSignup = (e) => {
    e.preventDefault()

    if (!username) {
      setError("Please enter your username.")
      return
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!password) {
      setError("Please enter the password.")
      return
    }
    setError("")

    // Login API Call..
  }


  
  return (
    <>
      <Navbar />
      
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder='User Name'
              className='input-box'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <input
              type="text"
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPasswor(e.target.value)}
            />

            {
              error && <p className="text-red-500 text-xs pb-1">{error}</p>
            }

            <button
              type="submit"
              className="btn-primary bg-[#2b86ff]"
            >
              Sign Up
            </button>

            <p className="text-sm text-center mt-4">
              Already have an accountt?{" "}
              <Link to="/login" className='font-medium text-[#2b86ff] underline'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
