import React from "react";
import { FooterSection } from "../index";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const titles = ["Quick Links", "Explore Me", "Get In Touch"];

  const links = [
    { title: "Home", link: "home" },
    { title: "Skills", link: "skills" },
    { title: "Projects", link: "projects" },
    { title: "About Me", link: "about" },
  ];

  const follow = [
    {
      title: "kirtanpatel01",
      link: "https://github.com/kirtanpatel01",
      icon: FaGithub,
    },
    {
      title: "kirtanpatel01",
      link: "https://linkedin.com/in/kirtanpatel01",
      icon: FaLinkedin,
    },
    {
      title: "_k_j_patel_",
      link: "https://x.com/_k_j_patel_",
      icon: FaTwitter,
    },
  ];

  const touch = [
    {
      title: "kjpatel20002@gmail.com",
      link: "mailto:kjpatel20002@gmail.com",
      icon: MdEmail,
    },
    {
      title: "_k_j_patel_",
      link: "https://www.instagram.com/_k_j_patel_/profilecard/?igsh=MWQ5Y2NuYnhlNGk4dg%3D%3D",
      icon: FaInstagram,
    },
  ];

  return (
    <div className="p-16 grid grid-cols-[0.5fr_1fr] justify-center max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-16 max-[375px]:p-8">
      <FooterSection title={titles[0]} items={links} />
      <div className="w-full grid grid-cols-2 max-lg:grid-rows-2 max-lg:grid-cols-1 max-lg:gap-16">
        <FooterSection title={titles[1]} items={follow} />
        <FooterSection title={titles[2]} items={touch} />
      </div>
    </div>
  );
}

export default Footer;
