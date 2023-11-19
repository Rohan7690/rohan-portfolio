import {motion} from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas, StarsCanvas} from './canvas';

import { slideIn } from '../utils/motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
    
      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto
      items-start gap-5 xl:mt-12 md:flex-row flex-col flex overflow-hidden`}>
      <div className='flex gap-5 md:max-w-4xl'>
      <div className='flex flex-col justify-center items-center
      mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>
      
      <div className={`${styles.heroHeadText} text-white`}>
        <h1>Hi,I&apos;m <span className='text-[#915eff]'>Rohan</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop websites <br className='sm:block hidden' /> and web applications
        </p>
      </div>
      </div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xxs:w-[95%] md:h-[100%] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      {/* <div className="">
        
        
      </div> */}
      </div>
      <StarsCanvas/>
      <div className="absolute xxs:bottom-10 bottom-32
      w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4
           border-secondary flex justify-center items-start p-2'>
          <motion.dev
          animate={{
            y:[0,24,0],
            transition:{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop',
            }
          }}
          className='w-3 h-3 rounded-full bg-white'
          />
          </div>
        </a>
      </div>



    </section>
  )
}

export default Hero