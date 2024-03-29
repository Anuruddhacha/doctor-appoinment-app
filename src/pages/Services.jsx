import { services } from "../assets/data/services"
import ServiceCard from "../components/services/ServiceCard"


const Services = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] mb-[30px]">

       {services.map((item,index)=>{

       return <ServiceCard key={index} item={item} index={index}/>

        })}

      </div>
  

    </div>
  )
}

export default Services