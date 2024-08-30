import React from 'react';
import { motion } from 'framer-motion';
import pablo from '../../public/pablo.png';
import pabloFractured from '../../public/pablo_fractured.png';

const Hero = () => {
  const titleVariant = {
    initial: { y: 0, zIndex: 1, transition: { duration: 0.5 } },
    animate: { y: -30, zIndex: 1, transition: { duration: 0.5 } },
  };

  const pabloVariant = {
    initial: { opacity: 1, transition: { duration: 0.5 } },
    animate: { opacity: 0, transition: { duration: 0.5 } },
  };

  const pabloFracturedVariant = {
    initial: { opacity: 0, transition: { duration: 0.5 } },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='flex pt-20 overflow-x-hidden justify-center'>
      <div className='max-w-min'>
        <motion.div
          style={{ width: 940 }}
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <motion.div
            className='flex justify-center'
            variants={titleVariant}
          >
            <h1 className='text-9xl font-bold'>PABLO’S SPACE</h1>
          </motion.div>
          <div
            className='relative -mt-12 mx-auto'
            style={{
              height: "1000px",
              display: 'flex',
              justifyContent: 'center', // Center the content horizontally
              alignItems: 'center',     // Center the content vertically (if needed)
            }}
          >
            <motion.img
              variants={pabloVariant}
              className='absolute'
              style={{ height: "1000px" }}
              src={pablo}
              alt="Pablo's Space illustration"
            />
            <motion.img
              variants={pabloFracturedVariant}
              className='absolute'
              style={{ height: "1000px" }}
              src={pabloFractured}
              alt="Pablo's Space fractured illustration"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
