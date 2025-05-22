import React from 'react'
import HeroImg from "../assets/hero.png";
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
    <main className='lg:flex items-center justify-center md:gap-7'>
      {/* Hero Content */}
      <section className=' flex flex-col gap-[16px] md:gap-[40px] py-8'>
        <h1 className='text-[#FFFFFF] font-[400] text-[52px] leading-[100%] md:leading-[90%] tracking-[0%] md:text-[101px] font-Bebas-Neue '>Hi, I am <span className='whitespace-nowrap'>ADELEKE ADEYEMI.</span></h1>
        <p className='text-[#C7C7C7] text-[16px] md:text-[18px] font-[400] leading-[160%] md:leading-[150%] tracking-[0%] mt-[8px] '>A Nigerian based front-end developer passionate about building accessible and user friendly websites.</p>
        {/* div for social contact button */}
         <div className="flex items-center gap-[16px] mt-6 flex-wrap ">
        {/* Contact Me Button */}
        <button className="flex items-center gap-3 bg-[#D3E97A] text-black font-semibold px-4 py-2 rounded-[100px]">
          CONTACT ME
          <span className="bg-black text-white text-[14px] font-[700]  rounded-full p-2">
            <ArrowUpRight size={16} />
          </span>
        </button>

        {/* LinkedIn Icon */}
        <a className='bg-[#222222] flex items-center justify-center rounded-[100px] w-[48px] h-[48px]  ' href="https://www.linkedin.com/in/jephthah-adeleke-a9207732b/" target='blank'><ion-icon className=" bg-[#222222] text-[#D3E97A]"  name="logo-linkedin"></ion-icon>

        </a>
        

        {/* Github icon */}
        <a className='bg-[#222222] flex items-center justify-center rounded-[100px] w-[48px] h-[48px]  '  href="https://github.com/Adeleke03" target='blank'>
          <ion-icon className=" bg-[#222222] text-[#D3E97A]"   name="logo-github"></ion-icon>
        </a>
        
        
      </div>
      </section>
      {/* Hero Image  */}
      <section>
        <figure><img src={HeroImg} alt="Hero Image of Adeleke Adeyemi" /></figure>
      </section>
    </main>
      
    </>
  )
}

export default Hero
