import React from 'react'

const Capabilities = () => {
  return (
    <>
      <section className='lg:flex  justify-between py-7'>
        <h2 className='text-white font-[400] font-Bebas-Neue text-[43px] leading-[100%] tracking-[-2%] lg:text-[76px] lg:tracking-[0%]  '>My Capabilities</h2>
        {/* div for capabilities context  */}
        <div className='lg:w-[555px]'>
          <p className='text-[#C7C7C7] py-4'>I am always looking to add more skills.Currently exploring modern frameworks, web animation, and product design principles to create smoother, more engaging user experiences.</p>
          <div class="flex flex-wrap gap-3 bg-black p-4 font-[700] text-[14px] rounded-lg w-fit">
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">HTML</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">CSS</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">JAVASCRIPT</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">JQUERY</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">ACCESSIBILITY</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">FIGMA</span>
  <span class="border-[#484848] border-1 text-white px-4 py-2 rounded-full text-sm">TAILWIND CSS</span>
</div>
        </div>
      </section>
    </>
  )
}

export default Capabilities
