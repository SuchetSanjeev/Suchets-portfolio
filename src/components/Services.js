import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs'
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'

const services = [
  {
    name:'Web Development',
    description:'I build responsive, user-friendly websites using the latest frameworks and technologies. By focusing on performance, accessibility, and clean design, I deliver seamless user experiences across devices.',
    link:'learn more',
  },
  {
    name:'Software Development',
    description:'I specialize in robust, scalable applications that solve real-world problems. Leveraging my expertise in various programming languages and frameworks, I develop efficient, secure, and maintainable software tailored to your needs.',
    link:'learn more',
  },
  {
    name:'Cloud Technologies',
    description:'I deploy and manage applications in the cloud using AWS, Docker, and other modern tools. Through careful architecture, continuous integration, and automation, I ensure that your applications remain scalable, secure, and cost-effective.',
    link:'learn more',
  },
  // {
  //   name:'product branding',
  //   description:'lorem ipusm come and get it big dawgsgell hetakn fsduifsdnfdsf sdoijrnwkeerw fd',
  //   link:'learn more',
  // },
]

const Services = () => {
  return (
  <div className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text*/}
        <motion.div 
        variants={fadeIn('right',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1 lg:bg-services custom-bg-position bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6 '>What i do</h2>
          <h3 className='h3 max-w-[500px] mb-6 text-2xl'>Crafting digital experiences that empower users and elevate your brand</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {/*services*/}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1'>
            {/*service list*/}
            <div>
              {services.map((service,index)=>{
                //destructure service
                const {name,description,link} = service;
                return (
                  <div className='border-b border-white/30 h-[200px] mb-[20px]
                  flex'
                  key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[25x] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center
                      items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href='$' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
        </motion.div>
      </div>
    </div>
  </div>
);
};

export default Services;
