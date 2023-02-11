import { motion } from 'framer-motion'
import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import LineGradient from './LineGradient'

const About = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="about" className='pt-10 pb-24'>
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div
                className='md:w-1/3'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x: -50},
                    visible: {opacity:1, x: 0}
                }}
            >
                <p className=' font-playfair font-semibold text-4xl mb-5'>
                    ABOUT <span className=' text-red'>US</span>
                </p>
                <LineGradient width='1/3'/>
                <p className='mt-10 mb-7'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
                    aspernatur quisquam blanditiis repellat nam temporibus natus recusandae possimus. 
                    Labore cum distinctio reiciendis quam delectus ipsam corrupti consectetur ad iure eius.
                </p>
            </motion.div>
            <div className=' mt-16 md:mt-0'>
                {isAboveMediumScreens ? (
                    <div
                        className = ' relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
                    >
                        <img src="about.jpg" alt="about" 
                            className='hover:filter hover:saturate-200 transition duration-500 z-10 w-[350px] max-w-[400px] md:max-w-[600px] h-[600px]'
                        />
                    </div>
                ):(
                   <img src="about.jpg" alt="about" 
                        className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] h-[500px]'
                    />   
                )}
            </div>
        </div>
        {/* Edu */}
        <div className='md:flex md:justify-between mt-16 gap-32'>
            {/* Edu1 */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0}
                }}
            >
                <div className='relative h-32'>
                    <div className=' z-10'>
                        <p className=' font-playfair font-semibold text-5xl'>01</p>
                        <p className=' font-playfair font-semibold text-3xl mt-3'>About</p>
                    </div>
                    <div className=' w-1/2 md:w-3/4 h-32 bg-blue absolute right-0  top-0 z-[-1]'></div>
                </div>
                <p className=' mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores quo similique
                    accusantium perferendis saepe rerum cupiditate non amet dolorem ad expedita distinctio beatae 
                    qui eos mollitia optio totam vitae.
                </p>
            </motion.div>
            {/* Edu2 */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{ delay:0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0}
                }}
            >
                <div className='relative h-32'>
                    <div className=' z-10'>
                        <p className=' font-playfair font-semibold text-5xl'>02</p>
                        <p className=' font-playfair font-semibold text-3xl mt-3'>Rainbow</p>
                    </div>
                    <div className=' w-1/2 md:w-3/4 h-32 bg-red absolute right-0  top-0 z-[-1]'></div>
                </div>
                <p className=' mt-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsa 
                    facilis omnis qui laudantium! Iste autem quibusdam tempore, numquam non blanditiis esse! 
                    Voluptatem laudantium nam laborum repellendus ipsum excepturi consequuntur.
                </p>
            </motion.div>
            {/* Edu3 */}
            <motion.div
                className='md:w-1/3 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{ delay:0.4, duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0}
                }}
            >
                <div className='relative h-32'>
                    <div className=' z-10'>
                        <p className=' font-playfair font-semibold text-5xl'>03</p>
                        <p className=' font-playfair font-semibold text-3xl mt-3'>Dot</p>
                    </div>
                    <div className=' w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0  top-0 z-[-1]'></div>
                </div>
                <p className=' mt-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit accusamus sit quod optio,
                     suscipit similique quam soluta tenetur excepturi 
                    cumque aliquam maxime natus, corrupti hic eius officia delectus quae officiis!
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default About