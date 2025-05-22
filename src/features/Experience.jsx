import React from 'react'

const Experience = () => {
  return (
    <>
    <main className='border-t-1 border-t-white py-8'>

      <section className='lg:flex  justify-between'>
        <h2 className='text-white font-[400] font-Bebas-Neue text-[43px] leading-[100%] tracking-[-2%] lg:text-[76px] lg:tracking-[0%]  '>My Experience</h2>
        {/* div for capabilities context  */}
        <div className='lg:w-[555px] py-6'>
          <h4 className='text-[18px] lg:text-[24px] text-white lg:flex lg:justify-between'>Freelance Developer <span className='block font-[400] text-[#C7C7C7] text-[16px] '>Nov 2023 — Present </span></h4>
          <p className='text-[#C7C7C7] py-4'>Built websites for clients as a freelance developer since 2023. Gained real-world experience collaborating on projects, solving problems, and delivering responsive, accessible digital solutions.</p>
          <div class="py-6">
            <h4 className='text-[18px] lg:text-[24px] text-white lg:flex lg:justify-between'>Front-End Intern<span className='block py-2 font-[400] text-[#C7C7C7] text-[16px] '>Sep 2023 — Nov 2023</span></h4><span className='font-[600] py-2 text-[#D3E97A]'>Studio Tech</span>
          <p className='text-[#C7C7C7] py-4'>Built websites for clients as a freelance developer since 2024. Gained real-world experience collaborating on projects, solving problems, and delivering responsive, accessible digital solutions.</p>
  
</div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Experience
