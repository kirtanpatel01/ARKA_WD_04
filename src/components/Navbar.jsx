import { useState } from "react";
import { hamburger, kj } from "../assets";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { title: "Home", link: "home" },
    { title: "Skills", link: "skills" },
    { title: "Projects", link: "projects" },
    { title: "About Me", link: "about" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="text-zinc-400 font-medium fixed w-full bg-neutral-950 shadow-bottom-xl z-50">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="text-slate-300 hover:text-white"><img src={kj} alt="KJ_PATEL" className="h-16 text-white"/></div>
        
        {/* Links */}
        <ul
          className={`flex justify-center items-center gap-16 tracking-widest transition-all duration-500 
            max-lg:gap-8 
            max-md:flex-col max-md:gap-4 max-md:absolute max-md:top-24 max-md:right-8 max-md:border max-md:p-8 max-md:rounded-2xl max-md:text-neutral-500
            ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}
        >
          {links.map((link) => (
            <li key={link.link} className="hover:text-white max-md:bg-white max-md:px-4 max-md:py-2 rounded-full max-md:hover:text-black">
              <a href={`#${link.link}`} onClick={handleLinkClick}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="h-6 w-6 justify-center items-center cursor-pointer hidden max-md:block"
        >
          {menuOpen ? (
            <RxCross2 className="text-white" />
          ) : (
            <img src={hamburger} alt="hamburger" className="h-6" />
          )}
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 mx-8"></div>
    </div>
  );
}

export default Navbar;
