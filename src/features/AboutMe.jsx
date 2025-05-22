import React from 'react';
import { ArrowUpRight } from "lucide-react";
import HeroImg from "../assets/hero.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
    <section className='lg:hidden'>
      <div>
      <p className='font-[400] text-[16px] py-4 border-t-1 border-t-white leading-[160%] mt-[8px] text-[#C7C7C7] '>I am a front-end developer based in Nigeria looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. </p>
      <ul className='list-none flex gap-[24px] py-4 text-[#D3E97A] '>
  <li className='border-b-[#D3E97A] border-b-2'><a href="" className="flex items-center  gap-1">
      MORE ABOUT ME<ArrowUpRight size={16} />
    </a></li>
</ul>
      </div>
      {/* ABOUT ME IMAGE */}
      <div className='py-5'>
        <figure>
         
          <img src={HeroImg} alt="" />
        </figure>
      </div>
      
    </section>
    {/* section for desktop screens  */}
    <section className='hidden text-white lg:grid lg:grid-cols-2'>
      <h1 className='uppercase  text-[101px] font-[400] font-Bebas-Neue leading-[90%] tracking-[0%] '>About me</h1>
      <div className=' '>
        <h3 className='font-[500] text-[32px] leading-[140%] tracking-[0%] '>I am a front-end developer based in Nigeria. Has Mechanical Engineering background. </h3>
        <p className='font-[400] text-[18px] leading-[150%] mt-[8px] tracking-[0%] text-[#C7C7C7] '>I am a front-end developer based in Nigeria looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
        <ul className='list-none flex gap-[24px] py-8 text-[#D3E97A] '>
          <Link to="about">
          <li className='border-b-[#D3E97A] border-b-2'><a href="" className="flex items-center  gap-1">
      MORE ABOUT ME<ArrowUpRight size={16} />
    </a></li>
          </Link>
  
</ul>
      </div>
    </section>
      
    </>
  )
}

export default AboutMe
