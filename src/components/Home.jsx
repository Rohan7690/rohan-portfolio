import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Tech from './Tech'
import Experience from './Experience'
import Feedbacks from './Feedbacks'
import Works from './Works'
import Contact from './Contact'
import StarsCanvas from './canvas/starsNew'




const Home = () => {
  return (
    <>
    <div className="relative z-0 bg-primary">
      <div className="">
        <Navbar />
        <Hero />
      </div> 
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0 bg-hero-pattern '>
        <Contact />
        {/* <StarsCanvas /> */}
      </div>

   </div>
   </>
  )
}

export default Home
