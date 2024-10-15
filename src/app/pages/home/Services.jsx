'use client'
import { SERVICES } from "@/app/constants";
import Button from "@/app/ui/Button";
import ServiceCard from "@/app/ui/ServiceCard";
import { useEffect } from "react";

export default function Services() {


  return (
    <section className="bg-[#1e1c22]">
        <div className="container">
            <div className="flex justify-center flex-col gap-12">
                <div className="mt-[5%]">
                    <p className="text-[18px] font-[500] text-primary uppercase text-center mb-5">Services We Offer</p>
                    <h2 className="heading text-white font-[700] capitalize text-center sm:leading-[3rem]">
                    Empowering Innovation with <br /> <span className="text-primary">Advanced AI Services</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 self-center">
                    {
                        SERVICES.slice(0, 3).map((service, index)=>
                       
                            <ServiceCard key={index} index={`${index+1}`} title={service.title} description={service.description} points={service.points}/>
                        )
                    }
                    
                </div>

                <div className="text-center py-5">
                    <Button btnText={'More Services'} href='/services' anchor/>
                </div>
            </div>
        </div>
    </section>
  )
}
