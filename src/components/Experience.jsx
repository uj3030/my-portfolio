import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import mongodb from '../assets/mongodb.png';
import php from '../assets/php.png';


const Experience = () => {

    const tech = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title: 'REACT',
            style: 'shadow-blue-300'
        },
        {
            id:5,
            src:mongodb,
            title: 'Mongo.Db',
            style: 'shadow-green-800'
        },
        {
            id:6,
            src:node,
            title: 'Node.js',
            style: 'shadow-green-500'
        },
        {
            id:7,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-300'
        },
        {
            id:8,
            src:php,
            title: 'Php',
            style: 'shadow-purple-300'
        },
    ]



  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-28'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>Technologies I've worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                tech.map(({id , src, title, style}) =>(
                    <div key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Experience
