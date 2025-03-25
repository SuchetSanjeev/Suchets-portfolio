import React from 'react';
//images
import Logo from '../assets/logos.png'

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href='#'>
        <h1 className='mb-2 text-[36px] lg:text-[-60px] font-secondary font-semibold uppercase leading-[1]'></h1>
          <img src={Logo} alt='' />
        </a>
        {/*button*/}
        <button className='btn btn-sm'>work with me</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
