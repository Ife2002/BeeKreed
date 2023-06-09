import React, {useRef, useEffect} from 'react'
import { motion, useScroll,
  useMotionValueEvent,
  useInView, 
  useAnimationControls,
  delay } from "framer-motion"
import Image from 'next/image'

function Section6() {

    const picvariant = {
        hidden: { opacity: 1, y: "3rem"},
        visible: {y: 0, opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        hiddenTwo: { opacity: 1, x: 0},
        visibleTwo: {x: "60%", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleThree: {x: "-60%", opacity: 1,
          transition:{ duration: 2, repeat: Infinity }
        },
        visibleFour: {x: "-130%", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
        visibleFive: {x: "130%", opacity: 1,
        transition:{ duration: 2, repeat: Infinity }
        },
      }
    
      const ref = useRef(null)
      const isInView = useInView(ref)
      const animation = useAnimationControls()
      const textanimation = useAnimationControls()

      useEffect(() => {

    
        if(isInView) {
         textanimation.set({ y: -20, opacity: 0})
         animation.set({ y: 20, opacity: 0})
         animation.start({y: 0, opacity: 1,
          transition: {
            duration: 1 
          }
        }),
        textanimation.start({y: 0, opacity: 1,
          transition: {
            duration: 1 
          }
        })
        
        }
     
    
      }, [isInView])

  return (
    <section className=' w-[100%] bg-black text-white'>

      
      <div className="w-[100%] h-[30vh] py-[5%] overflow-hidden relative xl:h-[50vh] bg-purple-600  flex justify-center items-center">
      <motion.div 
        initial="hidden"
        animate="visibleFour"
        variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] hidden md:flex justify-center items-center z-3 ">
       <Image src="AnimationBlocks/pic1.svg" className='w-[6rem] xl:w-[10rem]' width={200} height={200} />
         </motion.div>
         <motion.div 
        initial="hidden"
        animate="visibleThree"
        variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] flex justify-center items-center z-1 ">
        <Image src="AnimationBlocks/pic4.svg" className='w-[6rem] xl:w-[10rem]' width={200} height={200} />
         </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
         variants={picvariant}
        className=" absolute md:h-[20rem] w-[20rem] flex justify-center items-center z-2 h-[10rem] ">
        <Image src="AnimationBlocks/pic3.svg" className='w-[6rem] xl:w-[10rem]' width={200} height={200} />
          </motion.div>
          <motion.div
          initial="hidden"
          animate="visibleFive"
         variants={picvariant}
        className=" md:h-[20rem] w-[20rem] hidden md:flex justify-center items-center absolute z-4 ">
        <Image src="AnimationBlocks/pic5.svg" className='w-[6rem] xl:w-[10rem]' width={200} height={200} />
          </motion.div>

        <motion.div 
        initial="hidden"
        animate="visibleTwo"
        variants={picvariant}
        className=" md:h-[20rem] w-[20rem] flex justify-center items-center absolute z-0 ">
       <Image src="AnimationBlocks/pic2.svg" className='w-[6rem] xl:w-[10rem]' width={200} height={200} />
         </motion.div>
       
      </div>

        <div ref={ref} className=" py-[10%] h-[100%] flex items-center flex-col justify-start text-center xl:py-[10%]">
        <motion.h3 
        animate={textanimation}
        className='font-mono text-purple-600 font-medium text-[1.5rem] text-center mb-4'>Introducing</motion.h3>
          <motion.h2
          animate={animation}
          className="font-sans font-semibold text-3xl text-white px-[5%] text-[1.8rem] xl:text-[3rem]">
            Collaborative tools to design user experience
          </motion.h2>
          <motion.p
          animate={textanimation}
          className="font-sans font-normal text-[#ffffff70] px-[5%] mt-[1rem] xl:text-[1.5rem] xl:mt-8 xl:px-[25%]">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </motion.p>
        </div>
 

       </section>
  )
}

export default Section6