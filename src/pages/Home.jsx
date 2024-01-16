import HeroImage from '../../src/assets/images/hero-img01.png'
import HeroImage02 from '../../src/assets/images/hero-img02.png'
import HeroImage03 from '../../src/assets/images/hero-img03.png'
import Icon01 from '../../src/assets/images/icon01.png'
import Icon02 from '../../src/assets/images/icon02.png'
import Icon03 from '../../src/assets/images/icon03.png'
import VideoIcon from '../../src/assets/images/video-icon.png'
import AvatarIcon from '../../src/assets/images/avatar-icon.png'
import FeatureImg from '../../src/assets/images/feature-img.png'
import FaqImg from '../../src/assets/images/faq-img.png'
import { Link, useNavigate } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServicesList from '../components/services/ServicesList'
import DoctorsList from '../components/Doctors/DoctorsList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
import { toast } from 'react-toastify'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    

    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
 
      <div className='container'>

        <div className='flex flex-col lg:flex-row gap-[90px]
        items-center justify-between'>

          <div>
           <div className='lg:w-[570px]'>

             <h1 className='text-[36px] leading-[46px] text-headingColor
             font-[800] md:text-[60px] md:leading-[70px]'>
              We enhance the well-being and longevity of individuals.
             </h1>
             <p className='text__para'>
             Welcome to DocSyncPro, where we empower individuals to achieve optimal well-being and embrace a vibrant life. Discover expert guidance, personalized resources, and a supportive community dedicated to helping you thrive. Start your journey to a healthier, happier you today!
             </p>
             <button 
             onClick={()=>{
              navigate('/login')
              toast.error("Please login before")
             }}
             className='btn'>
               Request an Appoinment
             </button>
           </div>

           <div className='mt-[30px] lg:mt-[70px]
           flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

              <div>
               <h2 className='text-[36px] leading-[56px]
               lg:text-[44px] lg:leading-[54px]
               font-[700] text-headingColor'>
                30+
               </h2>
              <span className='w-[100px]
              h-2 bg-yellowColor rounded-full block mt-[-14px]
              '></span>

              <p className='text__para'>Years of Experience</p>
              </div>


              <div>
               <h2 className='text-[36px] leading-[56px]
               lg:text-[44px] lg:leading-[54px]
               font-[700] text-headingColor'>
                15+
               </h2>
              <span className='w-[100px]
              h-2 bg-purpleColor rounded-full block mt-[-14px]
              '></span>

              <p className='text__para'>Clinic Locations</p>
              </div>



              <div>
               <h2 className='text-[36px] leading-[56px]
               lg:text-[44px] lg:leading-[54px]
               font-[700] text-headingColor'>
                100%
               </h2>
              <span className='w-[100px]
              h-2 bg-irisBlueColor rounded-full block mt-[-14px]
              '></span>

              <p className='text__para'>Patient Satisfication</p>
              </div>


           </div>

          </div>

           <div className='flex gap-[30px] justify-end'>

              <div>
                <img 
                className='w-full'
                src={HeroImage} alt="herobg" />
              </div>  

              <div className='mt-[30px]'>
                <img src={HeroImage02} alt=""
                className='w-full mb-[30px]' />
                 <img src={HeroImage03} alt=""
                className='w-full' />
              </div>
           </div>

        </div>

      </div>

   

    </section>

    <section>

      <div className='container'>

        <div className='lg:w-[470px] mx-auto'>
           <h2 className='heading text-center'>
            Providing the best medical services
           </h2>
           <p className='text__para text-center'>
            World-class care for everyone. Our health system unmatched expert health care
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
        lg:mt-[55px]">

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={Icon01} alt="" />
            </div>

            <div className='mt-[30px]'>
            <h2
            className='text-[26px] leading-9 text-headingColor font-[700]
            text-center'
            >Find a Doctor</h2>
            <p
            className='text-[16px] leading-7 text-textColor font-[400]
            text-center'
            >World-class care for everyone. Our health system unmatched expert health care</p>

            <Link
            className='w-[44px] h-[44px]
            rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none'
             to={'/doctors'}>
            <BsArrowRight
            className='group-hover:text-white w-6 h-5'
            />
            </Link>
          </div>
          </div>


          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={Icon02} alt="" />
            </div>

            <div className='mt-[30px]'>
            <h2
            className='text-[26px] leading-9 text-headingColor font-[700]
            text-center'
            >Find a Location</h2>
            <p
            className='text-[16px] leading-7 text-textColor font-[400]
            text-center'
            >World-class care for everyone. Our health system unmatched expert health care</p>

            <Link
            className='w-[44px] h-[44px]
            rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none'
             to={'/doctors'}>
            <BsArrowRight
            className='group-hover:text-white w-6 h-5'
            />
            </Link>
          </div>
          </div>


          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={Icon03} alt="" />
            </div>

            <div className='mt-[30px]'>
            <h2
            className='text-[26px] leading-9 text-headingColor font-[700]
            text-center'
            >Book Appoinment</h2>
            <p
            className='text-[16px] leading-7 text-textColor font-[400]
            text-center'
            >World-class care for everyone. Our health system unmatched expert health care</p>

            <Link
            className='w-[44px] h-[44px]
            rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
            hover:border-none'
             to={'/doctors'}>
            <BsArrowRight
            className='group-hover:text-white w-6 h-5'
            />
            </Link>
          </div>
          </div>

          


        </div>
         
      </div>
    </section>

    <About/>

    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our medical services</h2>
        <p className='text__para text-center'>
          Proud to be one of the nations best
        </p>
        </div>

      <ServicesList/>
      </div>

      
    </section>
    
    <section>
      <div className="container">

       <div className="flex items-center
       justify-between flex-col lg:flex-row">

       <div className='xl:w-670px]'>
       <h2 className='heading'>
        Get virtual treatment <br/> anytime.
       </h2>
       <ul className='pl-4'>
        <li className="text__para">
          1. Schedule the appoinment derectly.
        </li>
        <li className="text__para">
          2. Search for your physician here, and contact their office.
        </li>

        <li className="text__para">
          2. use the online shceduling tool to select the appoinment time.
        </li>
       </ul>

       <Link to={'/'}>
         <button className='btn'>Learn More</button>
       </Link>

       </div>


       <div className='relative z-10 xl:w-[770px] flex justify-end
       mt-[50px] lg:mt-0'>
        <img src={FeatureImg} className='w-3/4' alt="" />

        <div className='w-[150px] lg:w-[248px] bg-white absolute
        bottom-[50px] left-0 md:bottom-[100px] md:left-5
        z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]
        '>

          <div className="flex items-center justify-between">
             <div className='flex items-center gap-[6px] lg:gap-3'>
             <p className='text-[10px] leading-[10px]
             lg:text-[14px] lg:leading-5 text-headingColor
             font-[600]'>Tue, 24</p>

            <p className='text-[10px] leading-[10px]
             lg:text-[14px] lg:leading-5 text-headingColor
             font-[400]'>10:00AM</p>

             </div>

             <span className='w-5 h-5 lg:w-[34px] flex
             items-center justify-center bg-yellowColor
             rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>

              <img src={VideoIcon} alt="" />
            
             </span>

          </div>

          <div className='w-[65px]
           lg:w-[96px] bg-[#CCF0F3] py-1
           px-2 lg:py-[6px]
           lg:px-[10px] text-[8px] leading-[8px]
           lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500]
           mt-2 lg:mt-4 rounded-full'>Consultation</div>

           <div className="flex items-center gap-[6px]
           lg:gap-[10px] mt-2 lg:mt-[18px]">
            <img src={AvatarIcon} alt="" />
            <h4
            className='text-[10px] leading-3
            lg:text-[16px] lg:leading-[22px] font-[700]'>Wayne Collins</h4>
           </div>

        </div>

       </div>



       </div>


      </div>


    </section>
   
   <section>

    <div className="container">

        <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our great doctots</h2>
        <p className='text__para text-center'>
          Proud to be one of the nations best
        </p>
        </div>

        <DoctorsList/>

    </div>


   </section>


   <section>
    <div className="container">

    <div className='flex justify-between gap-[50px] lg:gap-0'>
     
      <div className='w-1/2 hidden md:block'>
        <img src={FaqImg} alt="" />
      </div>

      <div className='w-full md:w-1/2'>
        <h2>Most questions by our beloved patients</h2>
        <FaqList/>
      </div>

    </div>


    </div>
   </section>

    <section>

     <div className="container">
     <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>What our patients say</h2>
        <p className='text__para text-center'>
          Proud to be one of the nations best
        </p>
        </div>

        <Testimonial/>

     </div>

    </section>




    </>
  )
}

export default Home