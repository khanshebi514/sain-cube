import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuArrowUpFromDot } from "react-icons/lu";
export default function BreedText({heading, link, description}) {
  return (
    <div className="px-5 py-10">
      <div className="flex justify-center items-center gap-5 flex-col">
      <div className="w-[170px] h-[35px] bg-green-900 flex justify-center">
        <div className="flex justify-around items-center gap-2">
          <GoDotFill className="text-white"/>
           <p className="text-white text-sm text-center text-nowrap">{link}</p>
          <GoDotFill className="text-white"/>
        </div>
      </div>
      
      <div className="space-y-5">
        <h1 className="title text-primary text-center md:text-nowrap">{heading}</h1>
        <p className="text-white font-normal text-base text-center">{description}</p>
        <div className="flex justify-center items-center gap-3">
        <Link href='/' className="text-primary">Home</Link>
        <LuArrowUpFromDot className="text-white rotate-90"/>
        <p className="text-white text-sm font-normal">{link}</p>
        </div>
        
      </div>
      </div>
      
    </div>
  )
}
