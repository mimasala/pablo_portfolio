import React, { useState } from 'react';
import { cn } from '../utils';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export type workCardProps = {
  title: string;
  description: string | JSX.Element;
  image: any;
  darken?: boolean | undefined;
};

const WorkImage: React.FC<workCardProps> = ({ title, description, image, darken }) => {
  const [loading, setLoading] = useState(true);

  const imageVariant = {
    initial: { filter: 'blur(0px)', transition: { duration: 0.5 } },
    animate: { filter: 'blur(12px)', transition: { duration: 0.5 } },
  };

  const titleVariant = {
    initial: { opacity: 0, transition: { duration: 0.3 } },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <motion.div
        className="w-full my-8"
        initial="initial"
        animate="initial"
        whileHover="animate"
      >
        <div className="relative" style={{ width: '100%', height: '100%' }}>
          {loading && (
            <Skeleton height="100%" width="100%" style={{ position: 'absolute', top: 0, left: 0 }} />
          )}
          <motion.img
            variants={imageVariant}
            style={imgStyle}
            src={image}
            alt={title}
            onLoad={handleImageLoad}
            className={loading ? 'hidden' : 'block'}
          />

          {!loading && (
            <div className="absolute inset-0 p-8 flex flex-col justify-start" style={{ pointerEvents: 'none' }}>
              <motion.div
                className={cn('font-bold text-6xl text-wrap mb-4', darken ? 'text-black' : 'text-white')}
                variants={titleVariant}
              >
                {title.toUpperCase()}
              </motion.div>

              <motion.div
                className={cn('font-bold text-2xl text-wrap', darken ? 'text-black' : 'text-white')}
                variants={titleVariant}
              >
                {description}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default WorkImage;
