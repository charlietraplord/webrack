import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
//import mylogo from '../public/logo.png'

type Props = {}

const mylogo = ({}) => {
    return '../public/${src}}'
}
export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7cl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img
        initial={{x:-200, opacity: 0}}
        transition={{duration: 0.2 }}
        whileInView={{opacity:1 , x:0 }}
        viewport={{ once: true}}
        src = "logo.png" className='mb-20 md:mb-0 flex-shrink-0 w-70 h-50 rounded-full object-cover 
        md:rounded-lg md:w-85  md:h-57 xl:h-[200px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                About <span className='underline decoration-[#0492FC]/50'>Webrack</span> {" "} :)
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe ullam molestiae ipsum aliquid nobis autem magni quod amet quos! Ipsum quas nihil corrupti illo a deleniti laborum eaque adipisci.
                Optio mollitia laboriosam ad voluptate est voluptatem reprehenderit sunt numquam inventore eius repellat vel vero nemo libero consequuntur magni molestiae, hic eligendi facere corporis. Aliquid recusandae mollitia voluptas similique deleniti.
                Laborum, necessitatibus! Impedit dolorum obcaecati maxime consequatur ipsum. Iusto dolore facere, distinctio tenetur rem repellat quod dolorem veniam cumque, enim aliquid accusantium, fugiat quis neque aut odio velit et porro?
            </p>
        </div>
    </motion.div>
  )
}