import React from 'react';
//images
import Image from '../assets/avatar.svg';
//icons
import {FaGithub,FaLinkedin, FaInstagram} from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'
// Import the image at the top of the file
import ProfileImage from '../assets/suchet1.png';


const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-16'>
        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
           variants={fadeIn('up',0.3)} 
           initial="hidden"
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}}
           className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>SUCHET SANJEEV<span> PATIL</span></motion.h1>
          <motion.div 
          variants={fadeIn('up',0.4)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}
          className='mb-6 text-[36px] lg:text-[-60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
          <TypeAnimation sequence={[
            'Full stack Developer',
            2000,
            'Software Engineer',
            2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          /></motion.div>
          <motion.p
          variants={fadeIn('up',0.5)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}
          className='mb-8 max-w-lg mx-auuto lg:mx-0'></motion.p>
          <motion.div
          variants={fadeIn('up',0.6)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href = '#' className='text-gradient btn-link'>My porfolio</a>
          </motion.div>
          {/*socials*/}
          <motion.div
          variants={fadeIn('up',0.7)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href = 'https://www.linkedin.com/in/suchet-sanjeev-patil24'>
              <FaLinkedin/>
            </a>
            <a href = 'https://github.com/SuchetSanjeev'>
              <FaGithub/>
            </a>
            <a href = 'https://www.instagram.com/suchet.24/profilecard/?igsh=MWY3MG1yaXg2a3pubw=='>
              <FaInstagram/>
            </a>
          </motion.div>
        </div>
        {/*image*/}
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial="hidden"
        whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[432px]'>
        <img src={ProfileImage} alt='Profile'/>
      </motion.div>
    </div>
  </div>
</section>
);
};

export default Banner;
