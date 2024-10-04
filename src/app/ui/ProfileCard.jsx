import Image from "next/image";
import SocialButton from "./SocialButton";

export default function ProfileCard({designation, title, imgUrl}) {
    
  return (
    <div className="w-[262px] h-[380px] border-[1px] border-gray-600 p-5 bg-[#121212] cursor-pointer rounded-t-full hover:rounded-t-none transition-all duration-500 group relative">
    <div className="w-[222px] h-[230px] transition-all duration-500 rounded-t-full group-hover:rounded-t-none">
        <Image src={imgUrl} width={222} height={230} alt="this is image" className="object-cover w-full h-full transition-all duration-500 rounded-t-full group-hover:rounded-t-none"/>
    </div>
    <div className="w-full p-2 py-5">
        <h1 className="text-[25px] font-bold text-center text-white tracking-tighter">
           {title}
        </h1>
        <p className="mt-1 text-lg font-semibold text-gray-B5 text-center">
           {designation}
        </p>
    </div>

    <div className="absolute top-[50px] -left-[50px] hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-700">
        <SocialButton />
    </div>
</div>
  )
}
