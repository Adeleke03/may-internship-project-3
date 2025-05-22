import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import EcommerceImg from "../assets/ecommerce.png"

const Ecommerce = () => {
  return (
    <>
    <section className='lg:flex lg:items-center gap-[48px]'>

     <div >
      <figure className='relative'><span className='absolute top-2 left-2 rounded-[100px] py-[6px] px-[12px] bg-[#0A0A0A] text-white text-[12px] font-[500] leading-[150%] tracking-[1%] '>Challenge</span><img className='lg:w-[600px]' src={EcommerceImg} alt="" /></figure>
      </div>
      {/* conceptuals context */}
      <div className='lg:w-[576px]'>
        
      <h3 className='font-500 text-white text-[24px] md:text-[32px] leading-[140%] py-5 tracking-[0%] ' >E-commerce product page</h3>
      <p className='font-[400] text-[16px] py-4 leading-[160%] mt-[8px] text-[#C7C7C7] '>Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.</p>
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
      <td className="py-2 font-[500]">Year</td>
      <td className="py-2 text-right font-[500]">2022</td>
    </tr>
    <tr className="border-b border-[#222]">
      <td className="py-2 font-[500]">Role</td>
      <td className="py-2 text-right font-[500]">Front-end Developer</td>
    </tr>
  </tbody>
</table>
{/* links  */}
<ul className='list-none flex gap-[24px] text-[#D3E97A] '>
<li className='border-b-[#D3E97A] border-b-2'>
    <a href="" className="flex items-center gap-1">
      LIVE DEMO <ArrowUpRight size={16} />
    </a>
  </li>  <li className='border-b-[#D3E97A] border-b-2'><a href="">SEE ON GITHUB <span><ion-icon name="logo-github"></ion-icon></span></a></li>
</ul>

      </div> 
    </section>
    </>
  )
}

export default Ecommerce
