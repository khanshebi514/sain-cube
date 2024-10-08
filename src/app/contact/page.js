import { FaLocationDot } from "react-icons/fa6";
import ContactUs from "../components/ContactUs";
import IconLink from "../ui/IconLink";
import Link from "next/link";

export default function Contact() {

    
  return (
    <section className="w-full bg-[#0f0f0f] py-10">
      <div className="max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-2 mt-[5%]">
        <div className="">
          <div>
            <h3 className="text-primary font-bold text-base uppercase">
              Contact with us
            </h3>
            <h1 className="title text-white">LET’S WORK TOGETHER?</h1>
            <p className="text-gray-300 font-light">
              Your messages will be forwarded to WhatsApp. Our team will contact
              you <br /> within 24 hours.
            </p>
          </div>
          <div>
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
          </div>
         
        </div>
        <ContactUs/>
      </div>
    </section>
  );
}
