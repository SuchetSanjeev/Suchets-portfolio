import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img3.png'
import Img3 from '../assets/portfolio-img2.png'
const Work = () => {
  return (
  <section className='section'id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
         variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 text-accent'>
            {/* h2-leading-tight text-accent */}
              My latest
              work
            </h2>
            <p className='max-w-sm mb-16'>Explore my recent projects, where creative design, user-centered development, and cutting-edge tech meet to deliver impactful digital experiences.</p>
              <button className='btn btn-sm'>View all projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/*overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} allt=''/>
            {/*pretitile */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>MERN stack</span>
              </div>
            {/*title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>E-commerce platform</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('left',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-8'>
          {/*image*/}
        <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/*overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} allt=''/>
            {/*pretitile */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Reactjs, Tailwind and framer-motino</span>
              </div>
            {/*title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Personal portfolio website</span>
            </div>
          </div>
          {/*image*/}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} allt=''/>
            {/*pretitile */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Reactjs and AWS</span>
              </div>
            {/*title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Grivienance portal with aws</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
};

export default Work;
