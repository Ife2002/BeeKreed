import React from 'react'
import Image from 'next/image'


function Hero() {
  return (
    <div className='xl:h-[80vh] h-[40vh] bg-purple-600 my-auto font-sans flex flex-col justify-center items-center w-[100%] px-[5%] xl:px-[18%]'>
      <h3 className='font-mono text-xl text-purple-200'>About Us</h3>
      <h1 className='xl:text-[4rem] text-[2rem] text-center text-white font-medium'>We are Beekreed and we create digital things</h1>
      <p className='xl:px-[20%] px-[10%] text-sm xl:text-lg text-center mt-3 xl:mt-6 text-[#e4e4e4]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
    </div>
  )
}

export default Hero
