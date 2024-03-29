import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCirlces from './BackgroundCirlces';
import Image from 'next/image'
import mylogo from '../public/logo.png'
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {

    const [texty, count] = useTypewriter({
        words: [
            "Hi Welcome to Webrack",
            "We-Do-Web.tsx",
            "<WeBuildSolutions />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
        <BackgroundCirlces />
        
       
          <Image className='relative rounded-full h-32 w-60 mx-auto object-cover'
          src={mylogo}
          alt='Webrack Logo'
           />
      <div className='z-10'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Build With Us</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{texty}</span>
        <Cursor cursorColor='#0492FC'/>
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#contacts'>
          <button className='heroButton'>Contacts</button>
          </Link>
        </div>

        </div>
    </div>
  )
}