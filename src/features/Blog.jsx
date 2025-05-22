import React from 'react'
import BlogImg from "../assets/blog.png";
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  return (
    <>
    <section className='lg:flex lg:items-center gap-[48px]'>
      {/* Blog Image  */}
      <div >
        <figure><img className='lg:w-[600px]' src={BlogImg} alt="web 3.0 website" /></figure>

      </div>
      {/* Blog context */}
      <div className='lg:w-[576px]'>
        <h3 className='font-500 text-white text-[24px] md:text-[32px] leading-[140%] py-5 tracking-[0%] ' >Blog site for World News</h3>
        <p className='font-[400] text-[16px] py-4 leading-[160%] mt-[8px] text-[#C7C7C7] '>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.</p>
        <table className="w-full text-left py-3">
  <thead>
    <tr>
      <th colSpan="2" className="pb-2">
        <h4 className="font-[600] text-[16px] leading-[150%] uppercase text-white">Project Info</h4>
      </th>
    </tr>
    <tr>
      <th colSpan="2">
        <hr className="border-[#333333] border-t-[1px] mb-2" />
      </th>
    </tr>
  </thead>
  <tbody className="text-[#C7C7C7] text-[14px]">
    <tr className="border-b border-[#222]">
      <td className="py-2 font-[500]">Client</td>
      <td className="py-2 text-right font-[500]">World News</td>
    </tr>
    <tr className="border-b border-[#222]">
      <td className="py-2 font-[500]">Year</td>
      <td className="py-2 text-right font-[500]">2022</td>
    </tr>
    <tr className="border-b border-[#222]">
      <td className="py-2 font-[500]">Role</td>
      <td className="py-2 text-right font-[500]">Front-end Developer</td>
    </tr>
  </tbody>
</table>
<ul className='list-none flex gap-[24px] text-[#D3E97A] '>
  <li className='border-b-[#D3E97A] border-b-2'><a href="" className="flex items-center  gap-1">
      VIEW PROJECT<ArrowUpRight size={16} />
    </a></li>
</ul>

      </div>
    </section>
      
    </>
  )
}

export default Blog
