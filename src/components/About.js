import React from 'react';
//countup
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import ProfileImage from '../assets/suchet1.png';

const About = () => {
  const {ref,inView} = useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row
       lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        {/* <motion.div
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1 bg-about bg-contain
         bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div> */}
        {/*text*/}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1'>
          <br/><br/><br/><br/><br/>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>Software Engineer<br/></h3>
          <p className='mb-6'>Hi, I’m Suchet Patil, a technology enthusiast and Information Technology student at VIT Vellore with 
            a strong foundation in software development, cloud computing, and cybersecurity. I am passionate about leveraging 
            cutting-edge technologies to build scalable, secure, and efficient systems.<br/><br/>
            During my internship at Vigyanlabs Innovations, I worked on Linux system administration, automated tasks with Bash 
            scripting, and containerized applications using Docker. I also developed a real-time MongoDB monitoring dashboard 
            using Prometheus and Grafana, enhancing database observability and performance tracking.<br/><br/>
            My experience extends to machine learning, where I have built projects like a Hybrid Financial Fraud Detection 
            system using RNN-LSTM and an Encrypted Traffic Anomaly Detection System leveraging LLMs and Wireshark to enhance 
            cybersecurity threat detection.<br/><br/>
            I am skilled in C/C++, Python, JavaScript, SQL, React, Node.js, and AWS, always eager to explore new challenges
            and innovate. Whether it's developing robust applications, optimizing cloud infrastructure, or enhancing security,
            I strive to make a meaningful impact through technology.
          </p>
        </motion.div>
        {/*stats*/}
        <div>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {inView ? <CountUp start={0} end = {1} duration={3}/> : null}
              <div className='font-primary text-sm tracking-[2px]'>
                Internship <br/>
                Experience
              </div>
            </div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {inView ? <CountUp start={0} end = {5} duration={3}/> : null}
              <div className='font-primary text-sm tracking-[2px]'>
                projects <br/>
                completed
              </div>
            </div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {inView ? <CountUp start={0} end = {0} duration={3}/> : null}
              <div className='font-primary text-sm tracking-[2px]'>
                research <br/>
                papers
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
              Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My porfolio
            </a>
          </div>
        </div> 
      </div>
    </div>
  </section>);
};

export default About;

// -----------------------------------------------------------------------------
// import React from 'react';
// //countup
// import CountUp from 'react-countup';
// import {useInView} from 'react-intersection-observer'
// import {motion} from 'framer-motion'
// import { fadeIn } from '../variants';
// import ProfileImage from '../assets/suchet1.png';

// const About = () => {
//   const {ref,inView} = useInView({
//     threshold:0.5,
//   });
//   return (
//   <section className='section' id='about' ref={ref}>
//     <div className='container mx-auto'>
//       <div className='flex flex-col gap-y-10 lg:flex-row
//        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
//         {/*img*/}
//         <motion.div
//         variants={fadeIn('right',0.3)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{once:false,amount:0.3}}
//         className='flex-1 bg-about bg-contain
//          bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
//         </motion.div>
//         {/*text*/}
//         <motion.div 
//         variants={fadeIn('left',0.5)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{once:false,amount:0.3}}
//         className='flex-1'>
//           <h2 className='h2 text-accent'>About me</h2>
//           <h3 className='h3 mb-4'>Im a web developer with 1 Internship Experience</h3>
//           <p className='mb-6'>Lorem ipsum iusfn fkjfsdinsj vocdsnd kf senifndsf Servicessvdfsd
//             ffsdfinsdfsdjkfsf rk ffoifjsmfd sectionsfdfbfnkmlds
//           </p>
//         </motion.div>
//         {/*stats*/}
//         <div>
//           <div className='flex gap-x-6 lg:gap-x-10  mb-12'>
//             <div className='text-[40px] font-tertiary text-gradient mb-2'>
//              {inView ? <CountUp start={0} end = {15} duration={3}/> : null}
//               <div className='font-primary text-sm tracking-[2px]'>
//                 Internship <br/>
//                 Experience
//               </div>
//             </div>
//             <div className='text-[40px] font-tertiary text-gradient mb-2'>
//              {inView ? <CountUp start={0} end = {13} duration={3}/> : null}
//               <div className='font-primary text-sm tracking-[2px]'>
//                 projects <br/>
//                 completed
//               </div>
//             </div>
//             <div className='text-[40px] font-tertiary text-gradient mb-2'>
//              {inView ? <CountUp start={0} end = {10} duration={3}/> : null}
//               <div className='font-primary text-sm tracking-[2px]'>
//                 satisfied <br/>
//                 clients
//               </div>
//             </div>
//           </div>
//           <div className='flex gap-x-8 items-center'>
//             <button className='btn btn-lg'>
//               Contact me</button>
//             <a href='#' className='text-gradient btn-link'>
//               My porfolio
//             </a>
//           </div>
//         </div> 
//       </div>
//     </div>
//   </section>);
// };

// export default About;
