import React from "react";
import { CyanBtn, SectionHeader, Container } from "..";

function Projects() {
  const links = [
    {
      url: "https://fitcare-alpha.vercel.app/",
    },
    {
      url: "https://upcurve-xi.vercel.app/",
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
              className="h-[600px] w-96 max-[425px]:w-80 rounded-lg opacity-100 hover:opacity-100 transform transition-transform duration-300 hover:scale-[1.02]"
              title="Embedded Website"
              style={{
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            />

            <CyanBtn
              href={link.url}
              text="Visit"
              spanText=""
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
