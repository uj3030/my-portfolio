import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <p className='text-xl mt-20'>
        I'm a passionate Full Stack Developer with expertise in the MERN stack, focused on building dynamic and efficient web applications.I specialize in the MERN stack, leveraging MongoDB for flexible data management, Express.js for building efficient server-side applications, React.js for creating dynamic and interactive user interfaces, and Node.js to run scalable server-side code. These technologies enable me to develop full stack applications that are robust, efficient, and user-friendly, covering both frontend and backend development seamlessly.
        </p>

        <br/>


        <p className='text-xl'>
         I had the opportunity to work on several impactful projects, gaining practical experience with the MERN stack.Additionally, I've worked on backend development, focusing on efficient server-side logic using Node.js and Express.js, as well as data management with MongoDB to ensure reliable data storage and retrieval. This not only strengthened my technical skills in full stack development but also gave me real-world experience in problem-solving.

        </p>
      </div>

    </div>
  )
}

export default About
