import { motion } from 'framer-motion'
import React from 'react'
import LineGradient from './LineGradient'

const container = {
    hidden: {},
    visible:{
        transition:{staggerChildren: 0.2}
    }
}

const eduVarient = {
    hidden: {opacity:0, scale: 0.8},
    visible: {opacity:1, sclae: 1}
}

const Info = ({title}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(' ').join('-').toLowerCase();
    return(
        <motion.div varients = {eduVarient} className=" relative">
            <div className={overlayStyles}>
                <p className=' text-2xl font-playfair'>
                    {title}
                </p>
                <p className=' mt-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, at facilis.
                     Facilis neque similique iste, aliquam vero eius obcaecati facere repudiandae 
                     ab iusto sit saepe sapiente distinctio id assumenda quae.
                </p>
            </div>
            <img src={`${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}

const Edu = () => {
  return (
    <section id="edu" className='pt-48 pb-48'>
        {/* Heading */}
        <motion.div
            className='md:w-2/5 mx-auto text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity:0, y: -50},
                visible: {opacity:1, y: 0}
            }}
        >   
            <div>
                <p className=' font-playfair font-semibold text-4xl'>
                    LET'S <span className=' text-red'>LEARN</span>
                </p>
                <div className=' flex justify-center mt-5'>
                    <LineGradient width='1/3'/>
                </div>
            </div>
            <p className='mt-10 mb-10'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
                aspernatur quisquam blanditiis repellat nam temporibus natus recusandae possimus. 
                Labore cum distinctio reiciendis quam delectus ipsam corrupti consectetur ad iure eius.
            </p>
        </motion.div>
        {/* Edu Items */}
        <div className=' flex justify-center'>
            <motion.div
                className='sm:grid sm:grid-cols-3'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                variants={container}
            >
                {/* Row 1 */}
                <div className=' flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                    LB Tv.
                </div>
                <Info title = "project 1"/>
                <Info title = "project 2"/>
                {/* row2 */}
                <Info title = "project 3"/>
                <Info title = "project 4"/>
                <Info title = "project 5"/>
                {/* row3 */}
                <Info title = "project 6"/>
                <Info title = "project 7"/>
                <div className=' flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                    OLx Pe Bech De
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Edu