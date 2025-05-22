import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black wrapper">
      {/* Navbar */}
      <nav className="flex justify-between p-[16px] md:px-[60px] md:py-[24px] items-center gap-1 container mx-auto text-[#C7C7C7] leading-[100%] md:leading-[150%]">
        {/* Website name */}
        <Link to="/" ><header className="font-[400] font-Bebas-Neue md:text-[32px] text-[28px] tracking-[-1%]">
          ADELEKE ADEYEMI
        </header>
        </Link>
        

        {/* Desktop menu */}
        <ul className="md:flex gap-[32px] hidden tracking-[-3%] text-[16px] font-Inter">
          <Link to="/"><li><a href="#">Work</a></li></Link>
          <Link to="about" ><li><a href="#">About</a></li>
          </Link>
          <Link to="contact" ><li><a href="#">Contact</a></li></Link>
          
        </ul>

        {/* Hamburger icon - small screens only */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 text-[#C7C7C7] font-Inter text-[16px]">
          <ul className="flex flex-col gap-4 items-center">
            <Link to="/"><li><a href="#" onClick={() => setMenuOpen(false)}>Work</a></li></Link>
            <Link to="about"><li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li></Link>
            <Link to="contact"><li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li></Link>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Navbar;
