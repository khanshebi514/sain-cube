import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './pages/home/Hero'
import Services from './pages/home/Services'
import AiProjects from './pages/home/AiProjects'
import OurExpert from './pages/home/OurExpert'
import Footer from './components/Footer'
import BreedCrumb from './components/BreedCrumb'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <AiProjects/>
      {/* <OurExpert/> */}
    </main>
  )
}
