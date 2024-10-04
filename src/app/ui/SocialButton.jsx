import { RiInstagramLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function SocialButton() {
    
  return (
    <div className="w-[50px] h-[250px] bg-[#121212] border-[1px] border-gray-700 p-2">
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="border-b-[1px] border-gray-500 py-2">
                <RiInstagramLine size={20} className="text-white hover:text-primary"/>
            </div>

            <div className="border-b-[1px] border-gray-500 py-2">
                <FaPinterestP size={20} className="text-white hover:text-primary"/>
            </div>

            <div className="border-b-[1px] border-gray-500 py-2">
                <FaTwitter size={20} className="text-white hover:text-primary"/>
            </div>

            <div className="border-b-[1px] border-gray-500 py-2">
                <FaFacebookF size={20} className="text-white hover:text-primary"/>
            </div>

        </div>
    </div>
  )
}
