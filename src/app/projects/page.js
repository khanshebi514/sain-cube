import BreedCrumb from "../components/BreedCrumb";
import { PROJECTS } from "../constants";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className='bg-[#1E1c22]'>
    <div className='mt-[5%]'>
      <div>
        <BreedCrumb heading={'Industry Specific Projects'} link={'Projects'} description={''} />
      </div>
      <div className="mt-10">
      <div className='container flex justify-center gap-5 flex-wrap'>
        {PROJECTS.map((service, index)=>
        <ProjectCard key={index} index={index} title={service.title} description={service.title} ImgUrl={service.iconUrl} video={service.video} industry={service.industy}/>
        )}
      </div>
      </div>
      
    </div>
  </section>
  )
}
