import React from 'react';
import Hero from '../features/Hero';
import Projects from '../features/Projects';


const Home = () => {
  return (
    <main className="bg-black wrapper">
      {/* section for hero */}
      <section className='mb-7'><Hero/></section>
      <hr className='border border-white my-9' />
      <section><Projects/></section>
      
    </main>
  )
}

export default Home
