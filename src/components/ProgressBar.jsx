// ProgressBar.js

import  { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';
const ProgressBar = ({ progressArray }) => {
  const duration = 1;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = parseInt(progressArray, 10); // Convert percentage string to integer
    const interval = setInterval(() => {
      if (progress < targetProgress) {
        setProgress(progress + 1);
      }
    }, duration / targetProgress);

    return () => clearInterval(interval);
  }, [progressArray, progress]);

  return (
    <motion.div variants={slideIn('left','tween',0.2,1)} className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="shadow w-full rounded-[100px] bg-gray-200">
          <div
            className="bg-cyan-500 text-xs rounded-[100px] leading-none py-1 text-center text-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
