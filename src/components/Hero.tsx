import { motion } from 'framer-motion';
import pablo from '../../public/pablo.avif';
import pabloFractured from '../../public/pablo_fractured.avif';

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
      <div className='max-w-min hidden lg:block'>
        <motion.div
          style={{ width: 940 }}
          initial="initial"
          animate="initial"
          whileHover="animate"
          whileTap="animate"
          whileDrag="animate"
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
      <div className='max-w-min lg:hidden'>
        <motion.div
          className='w-full px-8'
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, repeatType: "mirror", repeatDelay: 1 }}
        >
          <motion.div
            className='flex justify-center'
            variants={titleVariant}
          >
            <h1 className='text-3xl font-bold'>PABLO’S SPACE</h1>
          </motion.div>
          <div
            style={{
              height: "500px",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.img
              variants={pabloFracturedVariant}
              className='absolute'
              style={{ height: "500px" }}
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
