import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { BsFillCalendarCheckFill } from 'react-icons/bs';


function Hero() {

  const textvariant = {
    hidden: { opacity: 0, y: "1rem"},
    visible: {y: 0, opacity: 1,
      transition:{ duration: 1, }
    },
    visibleTwo: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.3 }
    },
    visibleThree: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.6 }
    },
    visibleFour: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 0.9 }
    },
    visibleFive: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.2 }
    },
    hiddenTwo: { opacity: 0, y: "-1rem"},
    visibleSix: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.5}
    },
    hiddenThree: { opacity: 0, y: "1rem"},
    visibleSeven: {y: 0, opacity: 1,
      transition:{ duration: 1, delay: 1.8}
    },
    
  }

  return (
    
         <section className='w-[100%] max-w-screen h-[100vh] flex justify-start items-start relative'>
        
         <div className='h-[100%] w-[100%] grid grid-cols-3 grid-rows-2 gap-4 absolute z-0 '>
          <div className='w-[4rem] h-[100%] relative sm:w-[6rem]'>
          <Image
          layout='fill'
        className="absolute flex justify-self-start"
        src='Purple.svg' />  
          </div>
          <div className=' w-[4rem] h-[100%]'></div>
          <div className='flex justify-end md:p-[3rem] h-[100%] relative sm:p-[1rem] sm:h-[50%] sm:pr-[5%]'>
          <Image
        layout="fill"
        className="absolute flex justify-self-start"
        src='market.svg' />
          </div>
          <div className=' p-[3rem] md:w-[3rem] h-[100%] relative sm:w-[8rem] sm:pt-[1rem]'>
          <Image
        layout="fill"
        className="absolute flex justify-self-start "
        src='design.svg' />   
          </div>
          <div></div>
          <div className=' p-[3rem] h-[100%] relative sm:w-[8rem] sm:pt-[1rem]'>
          <Image
        layout="fill"
        className="absolute  flex justify-self-start sm:mt-[1rem]"
        src='development.svg' />
          </div>
         </div>

        <div className='h-[100%] w-[100%] absolute z-2 grid grid-cols-12 '>
        <div className=' md:col-span-2 sm:col-span-1'></div>
         <div className=' md:col-span-8 w-[100%] h-[100%] flex items-center justify-center sm:col-span-10 sm:items-start'>
         <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <h1 className='font-sans font-bold md:text-[4.5rem] md:leading-[4.5rem] text-center text-black sm:text-[3.2rem] sm:leading-[3.1rem]'> 
      
       <motion.span
          initial="hidden"
          animate="visible"
          variants={textvariant}
          className="inline-block"
        >We design</motion.span> <motion.span
        initial="hidden"
          animate="visibleTwo"
          variants={textvariant}
          className="inline-block"
        >experiences</motion.span>
         <motion.span
         initial="hidden"
         animate="visibleThree"
         variants={textvariant}
         className="inline-block"
         >that enable
         </motion.span> <motion.span
        initial="hidden"
        animate="visibleFour"
        variants={textvariant}
        >
        people
        </motion.span> <motion.span
          initial="hidden"
        animate="visibleFive"
        variants={textvariant}
        className="inline-block "
        > feel</motion.span>
        </h1>
        <motion.p 
        initial="hiddenTwo"
        animate="visibleSix"
        variants={textvariant}
        className='md:px-[20%] mt-[2rem] font-sans font-normal text-center text-[#00000095] sm:px-[0%]'>
        Crafting and upgrading the next generation of web experiences. We empower our clients to refocus on the things that drive rapid and sustainable growth.
        </motion.p>
        <motion.button 
        initial="hiddenThree"
        animate="visibleSeven"
        variants={textvariant}
        className='bg-black text-white font-sans px-[10%] md:w-[40%] md:py-[0.7%] mt-[1.5rem] rounded-[5px] flex flex-row justify-center items-center sm:w-[100%] sm:py-[4%]'>
         <BsFillCalendarCheckFill /> <h1 className='ml-[0.7rem] sm:ml-[0.4rem]'>Let's talk shop</h1></motion.button>
         </div>
         </div>
         
         <div className=' md:col-span-2 sm:col-span-1'></div>
        </div>
          
        

         </section>
   
  )
}

export default Hero