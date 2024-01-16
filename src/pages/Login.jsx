/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

const Login = () => {

 const [formData,setFormData] = useState({email:'',password:''})

const handleInputChange = e=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const [isLoading,setIsloading] = useState(false)
  return (
   
    <section>

       <div className='w-full max-w-[570px] mx-auto rounded-lg
       shadow-md md:p-10 px-10'>

        <h3 className='text-headingColor
        text-[20px] leading-9 font-bold mb-10'>Hello <span
        className='text-primaryColor'
        >Welcome</span> Back</h3>

        <form action="py-4 md:py-0">
          <div className='mb-5'>
            <input type="email"
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61]
            focus:outline-none focus:border-b-primaryColor
            text-[22px] leading-7 text-headingColor
             cursor-pointer'
            required
             />
          </div>

          <div className='mb-5'>
            <input type="password"
            placeholder='Enter your password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61]
            focus:outline-none focus:border-b-primaryColor
            text-[22px] leading-7 text-headingColor
             cursor-pointer'
            required
             />
          </div>

          <div className="mt-7">
          <button
            disabled={isLoading && true}
             type='submit' className="btn w-full
            rounded-lg px-4 py-3"
            onClick={()=>{
              setIsloading(true)
            }}
            >
              {isLoading? <HashLoader size={35} color='#ffffff'/> :'Login'}
            </button>
          </div>

          <p className='text-center mt-5 text-textColor pb-3'>Have an account?
            <Link to={'/register'}
            className='text-primaryColor font-medium ml-1'>
               Register
            </Link>
          </p>


        </form>


       </div>

    </section>
  )
}

export default Login