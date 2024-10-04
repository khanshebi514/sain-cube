import { EXPERTS, experts } from "@/app/constants";
import Button from "@/app/ui/Button";
import ProfileCard from "@/app/ui/ProfileCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function OurExpert() {
  return (
    <section className="bg-[#22262a] py-10">
        <div className="container">
            <div className="flex justify-center flex-col gap-12">
                <div className="mt-[5%]">
                    <p className="text-[18px] font-[500] text-primary uppercase text-center mb-5">Our Team</p>
                    <h2 className="heading text-white font-[700] capitalize text-center sm:leading-[3rem]">
                    Industry<span className="text-primary">Expert Team</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-16 self-center">
                    {
                        EXPERTS.map((expert)=>
                        <ProfileCard key={expert.key} title={expert.title} designation={expert.designation} imgUrl={expert.ImgUrl}/>
                        )
                    }
                    
                </div>

                <div className="text-center py-5 relative">
                    <h1 className="text-[60px] md:text-[120px] font-bold uppercase strokeme">
                    Work With Us
                    </h1>

                    <h1 className="text-[90px] md:text-[220px] font-bold uppercase text-[#ffffff10]">
                    Let's Talk
                    </h1>
                    <div className="w-[250px] h-[250px] rounded-full bg-[#121212] border-[1px] border-gray-600 absolute top-[60%] left-[40%] hidden lg:flex justify-center items-center ">
                        <h3 className="text-white text-[25px] font-semibold">
                            Contact Us
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
