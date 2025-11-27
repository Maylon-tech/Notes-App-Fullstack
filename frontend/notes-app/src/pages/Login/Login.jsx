import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import { useState } from 'react'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPasswor] = useState("")
  const [error, setError] = useState(null)
  
  const handleLogin = (e) => {
    e.preventDefault()

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
          <form action="" onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>

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
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className='font-medium text-[#2b86ff] underline'>
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
