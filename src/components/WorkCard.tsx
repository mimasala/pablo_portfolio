import { motion } from 'framer-motion';
import { cn } from '../utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export type workCardProps = {
  title: string;
  img: any;
  darken?: boolean | undefined
  href: string
}

const WorkCard: React.FC<workCardProps> = ({ title, img, darken, href }) => {
  const navigate = useNavigate()

  const imageVariant = {
    initial: { filter: "blur(6px)", transition: { duration: 0.5 } },
    animate: { filter: "blur(0px)", transition: { duration: 0.5 } }
  };

  const titleVariant = {
    initial: { opacity: 1, transition: { duration: 0.3 } },
    animate: { opacity: 0, transition: { duration: 0.3 } },
  }

  const cardStyle = {
    width: '30em', // fixed width
    minWidth: '30em', // fixed width
    height: '20em', // fixed height
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const, // ensures the image covers the entire area without distorting
  };

  return (
    <>
      <motion.div
        className='p-5'
        style={cardStyle}
        initial="initial"
        animate="initial"
        whileHover="animate"
        onClick={() => href ? navigate(href) : null}
      >
        <div className='relative' style={{ width: '100%', height: '100%' }}>

          <motion.img
            variants={imageVariant}
            style={imgStyle}
            src={img}
            alt={title}
          />

          <motion.div
            className={cn("absolute inset-0 p-3 font-bold text-6xl text-wrap", darken ? "text-black" : "text-white")}
            variants={titleVariant}
            style={{ pointerEvents: 'none' }}
          >
            {title}
          </motion.div>

        </div>
      </motion.div >
    </>
  );
}

export default WorkCard;
