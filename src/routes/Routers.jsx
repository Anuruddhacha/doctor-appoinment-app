import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Doctor from "../pages/Doctors/Doctor"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Contact from "../pages/Contact"
import Services from "../pages/Services"

const Routers = () => {
  return  <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/doctors" element={<Doctor/>}/>
    <Route path="/doctors/:id" element={<DoctorDetails/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<SignUp/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>

    </Routes>
  
}

export default Routers