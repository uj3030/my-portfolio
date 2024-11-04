// import React from 'react';
import dellaspeca from '../assets/portfolio/dellaspeca.jpg';
// import NavBar from '../assets/portfolio/navbar.jpg';
import LOVISAPICC from '../assets/portfolio/LOVISAPICC.jpg';

const Portfolio = () => {
    const profile = [
        {
            id: 1,
            src: dellaspeca,
            link: 'https://github.com/uj3030/Della-Speca',
            Describe:'Technologies used Reactjs , Nodejs, Express and MongoDB.',
        },
        {
            id: 2,
            src: LOVISAPICC,
            link: 'https://github.com/uj3030/Lovisa_clone',
            Describe: 'Technologies used Javascript, Reactjs and tailwind Css.',
        },
        // {
        //     id: 3,
        //     src: NavBar,
        //     link: 'https://github.com/yourusername/NavBar', 
        // },
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-8'>Check some of my projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {profile.map(({ id, src, link , Describe}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt=" " className='rounded-md duration-200 hover:scale-105' />
                            <p className='text-center px-4 py-2'>{Describe}</p> {/* Description added here */}
                            <div className='flex items-center justify-center'>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <button className='w-full p-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-cyan-700 rounded-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
