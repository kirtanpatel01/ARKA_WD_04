import { kjpatel, web } from "../../assets/index.js";
import { CyanBtn } from '../index.js';

function Hero() {
  return (
    <div
      className="pt-24 mx-6 grid grid-cols-2 items-center max-md:grid-cols-1 transition-all duration-500"
      id="home"
    >
      <div className="p-16 grid max-lg:pl-8 transition-all duration-500 max-sm:pl-0">
        
        <div className="font-extrabold tracking-widest flex flex-col gap-8 max-lg:text-4xl">
          <span className="text-slate-300 text-4xl max-lg:text-3xl transition-all duration-500">Welcome to, </span>
          <span className="text-5xl">KJ.Patel's Workspace</span>
        </div>

        <h2 className="text-xl mt-16 max-lg:text-lg">
          &quot;<span className="px-1 tracking-wider">Turn your idea into real life Application</span>&quot;
        </h2>

        <CyanBtn
          href="#projects"
          text='Dive into'
          spanText='My Work'
          className="mt-24 mr-16 flex-1 justify-self-end max-sm:mr-0 max-sm:justify-self-center"
        />
      </div>

      <div className="flex justify-center">
        <img src={web} alt="KJ_PATEL" className="h-[35rem] rounded-full drop-shadow-md shadow-white max-2xl:h-96 max-lg:h-80"/>
      </div>
    </div>
  );
}

export default Hero;
