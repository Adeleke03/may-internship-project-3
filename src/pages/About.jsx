import React from 'react'
import { Download } from "lucide-react";
import SecondHero from "../assets/secondhero.png";
import Capabilities from '../features/Capabilities';
import Experience from '../features/Experience';
import Contact from './Contact';

const About = () => {
  return (
    <>
      <main className='bg-black wrapper'>
        {/* <section className='lg:hidden'> */}
      <section className=' text-white lg:grid lg:grid-cols-2'>
      <h1 className='uppercase text-[56px]  lg:text-[101px] font-[400] font-Bebas-Neue leading-[100%] lg:leading-[90%] tracking-[0%] '>About me</h1>
      <div className=' '>
        <h3 className='font-[500] text-[24px] lg:text-[32px] leading-[140%] tracking-[0%] py-3 '>I am a front-end developer based in Nigeria. Has Mechanical Engineering background. </h3>
        <p className='font-[400] lg:text-[18px] text-[16px] lg:leading-[150%] leading-[160%]  py-4 mt-[8px] tracking-[0%] text-[#C7C7C7] '>I am a front-end developer based in Nigeria looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
        <div className='flex gap-[12px] '>

        <ul className='list-none flex gap-[24px] py-8 text-[#D3E97A] '>
          <li className='bg-[#D3E97A] text-black rounded-full'>
    <a
      href="/resume.pdf"
      download
      className='flex items-center gap-2 px-4 py-2 text-sm font-semibold'
      >
      DOWNLOAD RESUME
      <Download size={16} className='bg-[#0A0A0A] text-white rounded-full p-1' />
    </a>
  </li>
          
          </ul>
          {/* div for social icons */}
     <div className='text-[#D3E97A] flex items-center gap-5 py-6  text-[32px]'>
      <a target='blank' href="https://www.linkedin.com/in/jephthah-adeleke-a9207732b/"><ion-icon name="logo-linkedin"></ion-icon></a>
      <a target='blank' href="https://github.com/Adeleke03/"><ion-icon name="logo-github"></ion-icon></a>
   
     </div>
      </div>
          
      </div>
      
    </section>
      {/* ABOUT ME IMAGE */}
      <section className='py-5 '>
        <figure className='w-full'>
         
          <img className='w-full' src={SecondHero} alt="" />
        </figure>
      </section>
      {/* section for my capabilities */}
      <section>
        <Capabilities/>
        <Experience/>
      </section>
      <Contact/>
      </main>
    </>
  )
}

export default About
