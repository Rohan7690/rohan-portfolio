// Tech.js
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import ProgressBar from './ProgressBar';
import { progress } from '../constants';
import { styles } from '../styles';

const Tech = () => {
  return (
    <div className='flex flex-col'>
    <motion.div className=''>
        <p className={styles.sectionSubText}>
          Tech stack
        </p>
        <h2 className={styles.sectionHeadText}>Technology</h2>
      </motion.div>
    <div className="flex flex-row mt-20 flex-wrap gap-10">
    
      {progress.map((pro, index) => (
        <div className="w-28 h-28" key={pro.name}>
          <h2>{pro.name}</h2>
          <ProgressBar progressArray={pro.number} index={index} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
