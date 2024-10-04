import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './pages/home/Hero'
import Services from './pages/home/Services'
import AiProjects from './pages/home/AiProjects'
import OurExpert from './pages/home/OurExpert'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <AiProjects/>
      <OurExpert/>
      <Footer/>
    </main>
  )
}
