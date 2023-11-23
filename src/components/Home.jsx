import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Tech from './Tech'
import Experience from './Experience'
import { StarsCanvas } from './canvas'
import Works from './Works'
import Contact from './Contact'


const Home = () => {
  return (
    <>
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern ">
        <Navbar />
        <Hero />
      </div> 
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0 '>
        <Contact />
        <StarsCanvas />
      </div>

   </div>
   </>
  )
}

export default Home
