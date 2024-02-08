'use client'

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary">
              Hello, I'm {''}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Fred',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                2000,
                'Mobile Developer',
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            distinctio omnis sed dolor recusandae est tempore ab, dignissimos
            consequatur debitis cum temporibus ut molestiae nesciunt vitae
            blanditiis dolorum dolores error.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-gradient-to-tl bg-gradient-to-br from-primary-600 via-secondary to-Tertiary hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-primary-600 via-secondary to-Tertiary">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
