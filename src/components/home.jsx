import React from 'react';
import Myimage from '../assets/MYimage.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';
import TypingEffect from 'react-typing-effect'; 

const Home = () => {
  return (
    <div name="home" className='h-full w-full bg-gradient-to-b from-black to bg-gray-800 via-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-40'>
        
        <div className='flex flex-col justify-center h-full pt-10 md:w-3/5 w-full'>
         
          <h1 className='text-4xl sm:text-6xl font-bold text-white pt-10'>
            <TypingEffect
              text={['Hi, I am Upasana']} 
              speed={100} 
              eraseDelay={2000} 
              cursor="|" 
              repeat={Infinity} 
            />
          </h1>

          
          <h2 className='text-2xl sm:text-4xl font-bold text-white pt-4'>
            I'm a Full Stack Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md pt-6'>
            I'm a dedicated Full Stack Developer with a strong foundation in the MERN stack, passionate about creating dynamic and user-friendly web applications. I've developed multiple projects, with experience in React, Node.js, Express, and MongoDB.
          </p>

          <div className='pb-10'>
            <Link 
              to='portfolio' 
              smooth 
              duration={500}
              className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 gap-2 cursor-pointer group'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>

        <div className='md:w-2/5 w-full'>
          
          <img src={Myimage} alt="myprofile" className='rounded-2xl mx-auto w-1/2 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;
