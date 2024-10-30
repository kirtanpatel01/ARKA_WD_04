import React from "react";
import { CyanBtn, SectionHeader, Container } from "..";

function Projects() {
  const links = [
    {
      url: "https://kirtanpatel01.github.io/ARKA_WD_03/",
      color: "#74ffd57c",
    },
    {
      url: "https://kirtanpatel01.github.io/ARKA_WD_01/",
      color: "#ff91237e",
    },
    {
      url: "https://kirtanpatel01.github.io/ARKA_WD_2/",
      color: "#74f6ff7c",
    },
  ];
  return (
    <Container id="projects">
      <SectionHeader title="Projects" />

      <div className="w-full px-16 max-[425px]:px-0 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col items-center gap-16 pb-16">
            <iframe
              src={link.url}
              className="h-[600px] w-96 max-[425px]:w-80 rounded-lg opacity-50 hover:opacity-100 transform transition-transform duration-300 hover:scale-[1.02]"
              title="Embedded Website"
              style={{
                boxShadow: `0px 0px 10px ${link.color}`,
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0px 0px 25px ${link.color}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = `0px 0px 10px ${link.color}`)
              }
            />

            <CyanBtn
              href={link.url}
              text="Visit"
              spanText="Me"
              shadowColor={link.color}
              className={`w-fit`}
              target="_blank"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
