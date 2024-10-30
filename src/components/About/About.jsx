import React from "react";
import { SectionHeader, Container } from "..";
import { dp } from "../../assets";

function About() {
  return (
    <Container id="about">
      <SectionHeader title="Who I am ?"/>
      <div className="w-full grid grid-cols-2 items-center p-16 max-[425px]:px-8 gap-16 max-md:gap-4 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse max-md:py-0">
        <div className="px-8 max-[425px]:px-0 mt-8 tracking-widest leading-6 flex flex-col gap-10">
          <p>
            I'm <span className="font-bold text-cyan-500">Kirtan Patel</span>, a passionate and curious learner, always excited
            by the prospect of creating, solving, and growing.{" "}
          </p>
          <p>
            Currently in my third year of college, I'm balancing my studies with
            real-world experience and personal projects that challenge me to
            think differently and push my boundaries.
          </p>
          <p>
            I believe in continuous growth, whether it's by exploring new ideas,
            connecting with others in the field, or developing a balanced
            lifestyle that nurtures both mind and body.
          </p>
          <p>
            Outside of work and studies, I’m focused on building habits that
            sustain my journey, from fitness to mindful learning, and embracing
            every opportunity to learn something new.
          </p>
        </div>
        <img
          src={dp}
          alt="Kirtan Patel"
          className="w-96 rounded-full justify-self-center transform transition-transform duration-300 hover:scale-105 "
        />
      </div>
    </Container>
  );
}

export default About;
