import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {

  return (
    <div>
      <Navbar />
      
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" className="">
            <h4 className="text-2xl mb-7">Login</h4>

            <input
              type="text"
              placeholder='Email'
              className='input-box'
            />
            <PasswordInput
             
            />

            <button
              type="submit"
              className="btn-primary bg-[#2b86ff]"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signUp" className='font-medium text-[#2b86ff] underline'>
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
