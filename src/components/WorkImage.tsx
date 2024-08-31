import React from 'react'
import { cn } from '../utils';
import { motion } from 'framer-motion';

export type workCardProps = {
  title: string;
  description: string | JSX.Element;
  image: any;
  darken?: boolean | undefined
}

const WorkImage: React.FC<workCardProps> = ({ title, description, image, darken }) => {
  const imageVariant = {
    initial: { filter: "blur(0px)", transition: { duration: 0.5 } },
    animate: { filter: "blur(12px)", transition: { duration: 0.5 } }
  };

  const titleVariant = {
    initial: { opacity: 0, transition: { duration: 0.3 } },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  }

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  };

  return (<>
    <motion.div
      className='w-full my-8 hidden lg:block'
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <div className='relative' style={{ width: '100%', height: '100%' }}>
        <motion.img
          variants={imageVariant}
          style={imgStyle}
          src={image}
          alt={title}
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-start" style={{ pointerEvents: 'none' }}>
          <motion.div
            className={cn("font-bold text-6xl text-wrap mb-4", darken ? "text-black" : "text-white")}
            variants={titleVariant}
          >
            {title.toUpperCase()}
          </motion.div>

          <motion.div
            className={cn("font-bold text-2xl text-wrap", darken ? "text-black" : "text-white")}
            variants={titleVariant}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </motion.div>
    <div className='lg:hidden'>
      <hr className='my-5' />
      <h1 className='font-bold text-3xl mb-2'>{title}</h1>
      <h1 className='mb-2'>{description}</h1>
      <img src={image} />
    </div>
  </>)
}

export default WorkImage
