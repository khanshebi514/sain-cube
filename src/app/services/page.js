import BreedCrumb from "../components/BreedCrumb";
import { SERVICES } from "../constants";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className='bg-[#1E1c22]'>
      <div className='mt-[5%]'>
        <div>
          <BreedCrumb heading={'Our Providing Services'} link={'services'} description={''} />
        </div>
        <div className="mt-10">
        <div className='container flex justify-center gap-5 flex-wrap'>
          {SERVICES.map((service, index)=>
          <ServiceCard key={index} index={index+1} title={service.title} description={service.description} points={service.points}/>
          )}
        </div>
        </div>
        
      </div>
    </section>
  )
}
