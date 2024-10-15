import Image from "next/image";
import NavItem from "../ui/navItem";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="h-[100px] border-b-[1px] border-b-gray-B5 fixed w-full top-0 bg-black z-50">
      <div className="container flex justify-between items-center">
      <div>
            <Image src={'/logo.svg'} alt="this is logo image" width={200} height={100}/>
        </div>
        <div className="">
            <NavItem/>
        </div>
        <div>
            <Button btnText={'contact us'} href='/contact' textOnly anchor/>
        </div>
      </div>
       
    </header>
  )
}
