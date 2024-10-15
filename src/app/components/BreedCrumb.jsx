import Image from "next/image";
import BreedText from "../ui/BreedText";

export default function BreedCrumb({heading, description, link}) {
  return (
    <section className=" bg-[#0f0f0f]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mt-2 hidden md:block">
            <Image src={'/img1.png'} width={200} height={300} alt="" className="rounded-full"/>
          </div>
          <div className="py-[100px] flex justify-center items-center">
            <BreedText heading={heading} description={description} link={link}/>
          </div>
          <div className="justify-self-center mt-[150px] hidden md:block">
            <Image src={'/img2.png'} width={250} height={300} alt="" className="rounded-t-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}
