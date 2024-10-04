'use client'

import { PROJECTS } from "@/app/constants";
import Button from "@/app/ui/Button";
import Counter from "@/app/ui/Counter";
import ProjectCard from "@/app/ui/ProjectCard";


export default function AiProjects() {
  return (
    <section className="bg-[#22262A] py-10">
        <div className="container">
            <div className="flex justify-center flex-col gap-12">
                <div className="mt-[5%]">
                    <p className="text-[18px] font-[500] text-primary uppercase text-center mb-5">Projects We Have Delivered</p>
                    <h2 className="heading text-white font-[700] capitalize text-center sm:leading-[3rem]">
                    Revolutionizing with <br /> <span className="text-primary">Advanced AI Services</span>
                    Projects.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 self-center">
                    {PROJECTS.slice(0,3).map((project)=>
                    <ProjectCard video={project.video} key={project.key} ImgUrl={project.iconUrl} title={project.title} industry={project.industy}/>
                    )}
                </div>

                <div className="text-center py-5">
                    <Button btnText={'View All Projects'} href='/services' anchor/>
                </div>
            </div>
        </div>
        <div className="my-10"> 
        <Counter/>
        </div>
        
    </section>
  )
}
