import {
  vite,
  js,
  html,
  css,
  c,
  react,
  tailwind,
  firebase,
  github,
  figma,
  ts,
  mongodb,
  node,
  appwrite,
  nextjs,
  vercel
} from "../../assets/index.js";

import { SectionHeader, Container } from "../index.js";

function Skills() {
  const skills = [
    {
      title: "Programming Language",
      list: [
        {
          logo: c,
          sub_title: "C++",
        },
        {
          logo: js,
          sub_title: "JavaScript",
        },
        {
          logo: ts,
          sub_title: "Typescript",
        },
      ],
    },
    {
      title: "Frontend Development",
      list: [
        {
          logo: html,
          sub_title: "HTML",
        },
        {
          logo: css,
          sub_title: "CSS",
        },
        {
          logo: react,
          sub_title: "React",
        },
        {
          logo: tailwind,
          sub_title: "Tailwind CSS",
        },
      ],
    },
    {
      title: "Backend Development",
      list: [
        {
          logo: node,
          sub_title: "Node.js",
        },
      ],
    },
    {
      title: "Full Stack Development",
      list: [
        {
          logo: nextjs,
          sub_title: "Next.js",
        },
      ],
    },
    {
      title: "Database Management",
      list: [
        {
          logo: firebase,
          sub_title: "Firebase",
        },
        {
          logo: appwrite,
          sub_title: "Appwrite",
        },
        {
          logo: mongodb,
          sub_title: "MongoDB",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      list: [
        {
          logo: vite,
          sub_title: "Vite",
        },
        {
          logo: figma,
          sub_title: "Figma",
        },
      ],
    },
    {
      title: "Deployment",
      list: [
        {
          logo: github,
          sub_title: "GitHub",
        },
        {
          logo: vercel,
          sub_title: "Vercel",
        },
      ],
    },
  ];

  return (
    <Container id="skills">
      <SectionHeader title="Skills" className="max-[425px]:mb-0"/>

      <div className="w-[1440px] max-[1440px]:w-full grid grid-cols-3 gap-16 items-start max-md:mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
        {skills.map((item, index) => (
          <div
            key={index}
            className="text-white p-8 rounded-3xl border border-slate-500 mx-auto w-80 max-[320px]:w-72 h-full bg-[#f1f5f908] hover:shadow-equal hover:shadow-slate-400"
          >
            <h2 className="text-xl font-semibold mb-8">{item.title}</h2>
            {item.list.map((skill, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[0.5fr_1fr] items-center my-1"
              >
                <img
                  src={skill.logo}
                  alt={skill.sub_title}
                  className="h-16 p-4"
                />
                <span className="ml-4 w-16">{skill.sub_title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
