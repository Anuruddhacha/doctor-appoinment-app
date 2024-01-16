/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import SignUpImg from '../assets/images/signup.gif'
import AvatarImg from '../assets/images/doctor-img01.png'
import { uploadImgToCloud } from '../utils/uploadCloud'
import { BASE_URL } from '../utils/config'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'


const SignUp = () => {

  const [selectFile,setSelectedFile] = useState(null)
  const [previewUrl,setPreviewUrl] = useState("")
  const [loading,setLoading] = useState(false)
 const [formData,setFormData] = useState(
  {username:'',
  email:'',
  password:'',
  photo:selectFile,
  gender:'',
  role:'patient'
})

const navigate = useNavigate()

const handleInputChange = e=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleFileInputChange = async (event)=>{
   const file = event.target.files[0]
   const data = await uploadImgToCloud(file)
    
   setPreviewUrl(data.url)
   setSelectedFile(data.url)
   setFormData({
    ...formData,
    photo:data.url
   })
}

const submitHandler = async event =>{
  
  event.preventDefault()
  setLoading(true)


  try {
    console.log("v1")
    const res = await fetch(`http://localhost:5000`,{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
    })

    console.log('done111')

    const {message} = await res.json()

    if(!res.ok){
      throw new Error(message)
    }

    setLoading(false)
    toast.success(message)
    navigate('/login')
    
  } catch (error) {
     toast.error(error.message)
     setLoading(false)
  }

}


  return (
    <section className='px-5 xl:px-0'>

      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">


          <div className="hidden lg:block bg-primaryColor rounded-l-lg">

            <figure className='rounded-l-lg'>
              <img src={SignUpImg} alt="" />
            </figure>
          </div>


          <div className="rounded-l-lg lg:pl-6 py-10">
            <h3 className='text-headingColor text-[22px] leading-9
            font-bold mb-10
            '>Create an <span className='text-primaryColor'>Account</span></h3>

           
               <form 
               onSubmit={submitHandler}
               action="">

            <div className='mb-5'>
            <input type="name"
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61]
            focus:outline-none focus:border-b-primaryColor
            text-[22px] leading-7 text-headingColor
             cursor-pointer'
            required
             />
          </div>


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


          <div className="flex mb-5 items-center justify-between">
                  <label  className='text-headingColor
                  font-bold text-[16px] leading-7'>
                    Are you a:
                    <select name="role" 
                    value={formData.role}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold
                    text-[15px] leading-7 px-4 py-3 focus:outline-none' >

                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>

                    </select>
                  </label>

                  <label  className='text-headingColor
                  font-bold text-[16px] leading-7'>
                    Gender:
                    <select
                    value={formData.gender}
                    onChange={handleInputChange}
                     name="gender" className='text-textColor font-semibold
                    text-[15px] leading-7 px-4 py-3 focus:outline-none' >

                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>

                    </select>
                  </label>
          </div>

           <div className="mb-5 flex items-center gap-3">
     

            {selectFile && <figure className='w-[60px] h-[60px]
            rounded-full border-2 border-solid border-primaryColor
            flex items-center justify-center'>
              <img src={previewUrl} alt="" 
              className='w-full rounded-full'/>
            </figure>}

            <div className='relative w-[130px] h-[50px]'>

              <input className='absolute top-0 left-0 w-full h-full
              opacity-0'
              onChange={handleFileInputChange}
               type="file" name='photo' id='customFile'
              accept='.jpg, .png'/>

              <label htmlFor="customFile"
              className='absolute top-0 left-0 w-full h-full cursor-pointer flex items-center px-[0.75rem]
              py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46]
              text-headingColor text-center font-semibold rounded-lg truncate'
              >
                Upload Photo
              </label>

            </div>

           </div>


           <div className="mt-7">
            <button
            disabled={loading && true}
             type='submit' className="btn w-full
            rounded-lg px-4 py-3">
              {loading? <HashLoader size={35} color='#ffffff'/> :'Sign Up'}
            </button>
          </div>

          <p className='text-center mt-5 text-textColor pb-3'>Already have an account?
            <Link to={'/login'}
            className='text-primaryColor font-medium ml-1'>
               Login
            </Link>
          </p>



               </form>


          </div>

          


        </div>
      </div>

    </section>
  )
}

export default SignUp
