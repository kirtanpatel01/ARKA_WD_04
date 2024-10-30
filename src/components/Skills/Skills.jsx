import {
  vite,
  js,
  html,
  html5,
  css,
  python,
  java,
  c,
  react,
  django,
  tailwind,
  firebase,
  sqlite,
  github,
  figma,
  android,
} from "../../assets/index.js";

import { SectionHeader, Container } from "../index.js";

function Skills() {
  const skills = [
    {
      title: "Programming Language",
      list: [
        {
          logo: c,
          sub_title: "C",
        },
        {
          logo: java,
          sub_title: "Java",
        },
        {
          logo: python,
          sub_title: "Python",
        },
        {
          logo: js,
          sub_title: "JavaScript",
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
          logo: django,
          sub_title: "Django",
        },
      ],
    },
    {
      title: "Mobile App Development",
      list: [
        {
          logo: android,
          sub_title: "Android Development",
        },
      ],
    },
    {
      title: "Database Management",
      list: [
        {
          logo: sqlite,
          sub_title: "SQLite3",
        },
        {
          logo: firebase,
          sub_title: "Firebase",
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
