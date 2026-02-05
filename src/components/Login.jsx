import React from 'react'
import { ScrollAnimation } from './ScrollAnimation'
 
const Login = () => {
    const { ref, visible } = ScrollAnimation()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div ref={ref}
        className={`login-card w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 ${
          visible ? "show" : ""
        }`} >
        <h2 className="text-3xl font-bold text-gray-800 text-center"> Welcome!👋 </h2>
        <p className="text-gray-500 text-center mt-2"> Sign in to end up starving 🍔</p>

        <form className="mt-8 space-y-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-600"> Email </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600"> Password </label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 outline-none "
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 active:scale-95 transition"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
