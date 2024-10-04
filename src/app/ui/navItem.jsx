import Link from "next/link";

export default function NavItem() {
  return (
    <nav>
        <ul className="flex justify-center items-center gap-3">
            <Link className="nav-link hover:text-primary" href={'/'}>Home</Link>  
            <Link className="nav-link hover:text-primary" href={'/about'}>About us</Link>  
            <Link className="nav-link hover:text-primary" href={'/services'}>Services</Link>  
            <Link className="nav-link hover:text-primary" href={'/projects'}>Projects</Link>  
        </ul>
    </nav>
  )
}
