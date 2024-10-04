import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import IconLink from "../ui/IconLink";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import Input from "../ui/Input";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="bg-[#22262a] py-10">
      <div className="container ">
        <div className="py-5">
            <Image src={'/logo.svg'} width={170} height={50} alt="logo image"/>
        </div>
        <div className="w-full h-[1px] bg-gray-700"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="py-10 space-y-10">
                <div className="w-[250px]">
                    <IconLink icon={<FaLocationDot size={20} className="text-primary"/>} text={'Address # 1'}/>
                    <Link href={'/'} className="text-base font-normal text-gray-500 hover:text-primary pt-2">
                    5900 BALCONES DR 17552, AUSTIN, Texas, 78731, USA
                    </Link>
                </div>
                <div className="w-[250px]">
                    <IconLink icon={<FaLocationDot size={20} className="text-primary"/>} text={'Address # 2'}/>
                    <Link href={'/'} className="text-base font-normal text-gray-500 hover:text-primary pt-2">
                    Office 3030, 3rd Floor, Giga Mall (World Trade Center), Islamabad, Pakistan-45730
                    </Link>
                </div>
            </div>

            <div className="py-10 w-[250px] space-y-10">
                <div className="">
                    <IconLink icon={<BiLogoTelegram size={25} className="text-primary"/>} text={'Say Hello'}/>
                    <ul>
                    <Link href={'/'} className="text-base font-normal text-gray-500 hover:text-primary pt-2 block">
                    ceo@saincube.com
                    </Link>
                    <Link href={'/'} className="text-base font-normal text-gray-500 hover:text-primary pt-2 block">
                    cto@saincube.com
                    </Link>
                    </ul>
                    
                </div>

                <div className="">
                    <h3 className="captalise text-white text-lg py-3">See our News Update</h3>
                    <Input placeholder={'Enter your Email'} type="email" icon={<IoIosArrowRoundForward size={25} className="text-black -rotate-45 hover:rotate-0 transition-all duration-500"/>}/>
                </div>
                <div>

                </div>
            </div>

            <div className="py-10 w-[250px] space-y-5">
                <h3 className="text-[25px] font-semibold text-white">Pages</h3>
                <ul className="space-y-5">
                    <Link href={'/'} className="text-gray-400 font-medium capitalize hover:text-primary block">Homepage</Link>
                    <Link href={'/about'} className="text-gray-400 font-medium capitalize hover:text-primary block">About Us</Link>
                    <Link href={'/services'} className="text-gray-400 font-medium capitalize hover:text-primary block">Our Services</Link>
                    <Link href={'/projects'} className="text-gray-400 font-medium capitalize hover:text-primary block">Our Projects</Link>
                    <Link href={'/contact'} className="text-gray-400 font-medium capitalize hover:text-primary block">Contact us</Link>
                    
                </ul>
            </div>
        </div>

        <div className="w-full h-[1px] bg-gray-700"></div>
        <p className="text-white mt-5">©Copyright 2024 <span className="text-lg hover:text-primary">SAINCUBE</span></p>
      </div>
    </footer>
  );
}
