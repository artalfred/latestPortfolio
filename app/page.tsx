import Button from "./components/Button";
import Container from "./components/Container";
import Image from "next/image";
import Content from "./components/Content";
import LogoSlider from "./components/LogoSlider";
import VAStuffingHub from "../public/Logo/VAStaffingHub.svg";
import NLBB from "../public/Logo/NextLevelBusinessbrokers.svg";
import TheSetupPro from "../public/Logo/TheSetupPro.svg";
import DCC from "../public/Logo/DCC.svg";
import Projects from "./components/Projects";
import JobExperience from "./components/JobExperience";

export default async function Home() {
  return (
    <Container>
      <main className="hero flex justify-center items-center ">
        <div className="grid gap-8 justify-center items-center">
          <div className="grid 2xl:gap-6 md:gap-4 sm:gap-4 gap-4">
            <h1 className="text-center leading-none ">Design that reveals.</h1>
            <h1 className="text-center leading-none">Code that scales.</h1>
          </div>

          <div className="flex justify-center">
            <Content
              style="text-center"
              content="I help brands grow through bold visuals and thoughtful digital experiences that drive results."
            />
          </div>

          <div className="flex justify-center">
            <Button
              title="Get a quote"
              style="main--btn main-btn-color"
              link="/"
            ></Button>
          </div>
        </div>
      </main>

      <div className="section grid gap-10">
        <div className="flex justify-center">
          <Content
            style="text-center"
            content="I’ve collaborated with industry leaders and valued clients."
          />
        </div>

        <div className="2xl:flex lg:flex md:hidden sm:hidden hidden md:grid-cols-2 sm:grid-cols-2 grid-cols-2 sm:gap-4 2xl:gap-12 lg:gap-12 md:gap-8 gap-4 justify-center">
          <div className="flex justify-center">
            <Image src={VAStuffingHub} alt="Logo" width={170} height={20} />
          </div>
          <div className="flex justify-center">
            <Image src={NLBB} alt="Logo" width={170} height={20} />
          </div>
          <div className="flex justify-center">
            <Image src={TheSetupPro} alt="Logo" width={170} height={20} />
          </div>
          <div className="flex justify-center">
            <Image src={DCC} alt="Logo" width={170} height={20} />
          </div>
        </div>

        <div className="2xl:hidden lg:hidden md:block sm:block block overflow-x-hidden">
          <LogoSlider />
        </div>
      </div>

      <div>
        <h2 className="text-center">Explore the projects I’ve taken on</h2>
      </div>
      <Projects />

      <div className="flex justify-center mt-16">
        <Button
          title="Explore All Project Archive"
          style="main--btn main-btn-color"
          link="/archive"
        ></Button>
      </div>

      {/* JOB EXPERIENCE */}
      <div className="2xl:mt-40 lg:mt-40 md:mt-20 sm:mt-20 mt-20">
        <JobExperience />
      </div>
    </Container>
  );
}
