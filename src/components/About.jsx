
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  
  return(
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div
      variants={fadeIn('right','spring',0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card '
      >

      <motion.div
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary rounded-[20px] py-5 
      px-12 min-h-[280px] flex flex-col justify-evenly items-center'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold 
          text-center'>{title}</h3>
      </motion.div>

      </motion.div>
    </Tilt>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary 
      text-[17px] max-w-3xl leading-[30px]'>
        I&apos;m a skilled Full Stack Web Developer with experience in Javascript and
        experience in frameworks like React, Node.js and Three.js. 
        I am passionate about creating beautiful, intuitive, and 
        accessible applications that solve real-world problems. 
        I am a lifelong learner and am always looking for new 
        opportunities to grow and develop my skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} 
          {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,'about')
