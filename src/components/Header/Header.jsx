/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"
import userImage from "../../assets/images/avatar-icon.png"
import {BiMenu} from 'react-icons/bi'
import { useEffect, useRef } from "react"


const Header = () => {
  const navLinks = [
    {
      path:'/home',
      display: 'Home'
    },
    {
      path:'/doctors',
      display: 'Find a Doctor'
    },
    {
      path:'/services',
      display: 'Services'
    },
    {
      path:'/contact',
      display: 'Contact'
    }
  ]

  const {pathname} = useLocation()

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    
    })
  }

  const toggleMenu = () => menuRef.current
  .classList.toggle('show__menu')


  useEffect(()=>{
  handleStickyHeader()
  return ()=> window.
  removeEventListener('scroll', handleStickyHeader)
  })


  

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
          { /* <img src={logo} alt="logo" /> */}
          <h1 className="text-[40px] font-bold">DocSync<span className="text-[#DC84F3]">Pro</span></h1>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
             <ul className="menu flex items-center gap-[2.7rem]">
             {navLinks.map((link,index)=>{
              return (<li
              className={link.path === pathname ? 'text-primaryColor text-[16px] leading-7 font-[600]'
               : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}
               key={link.path}>
                <Link to={link.path}>{link.display} </Link> 
              </li>)
             })}
             </ul>

          </div>

          <div className="flex items-center gap-4">
                <div className="hidden">
                  <figure className="w-[35px] h-[35px]
                    rounded-full">
                  <Link to={'/'}>
                    <img src={userImage} alt="user" 
                    className="rounded-full w-full"
                    />
                  </Link>
                  </figure>
                </div>

                <Link to={'/login'}>
                 <button
                 className="bg-primaryColor
                 py-2 px-6 text-white
                 font-[600] h-[44px] flex items-center
                 justify-center rounded-[50px]"
                 >Login</button>
                </Link>


                <span className="md:hidden" 
                onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer"/>

                </span>



          </div>



        </div>



      </div>

    </header>
  )
}

export default Header