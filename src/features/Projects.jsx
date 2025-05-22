import React from 'react';
import Conceptuals from './Conceptuals';
import Blog from './Blog';
import Ecommerce from './Ecommerce';
import AboutMe from './AboutMe';
import Contact from '../pages/Contact'; // ✅ Corrected

const Projects = () => {
  return (
    <main>
      {/* Featured Projects */}
      <section className='md:w-[600px] mb-5'>
        <h2 className='text-white font-Bebas-Neue font-[400] text-[43px] leading-[100%] tracking-[-2%]'>
          Featured Projects
        </h2>
        <p className='text-[#C7C7C7] font-[400] text-[16px] leading-[160%] tracking-[0%] mt-[8px] md:text-[18px] md:leading-[150%]'>
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </section>

      {/* Conceptual Projects */}
      <section className='flex flex-col gap-y-9'>
        <Conceptuals />
        <Blog />
        <Ecommerce />
      </section>

      {/* About Me Section */}
      <section className='lg:py-10 lg:border-t-1 lg:border-t-white'>
        <AboutMe />
      </section>

      {/* Let’s connect section */}
      <section>
        <Contact />
      </section>
    </main>
  );
};

export default Projects;
