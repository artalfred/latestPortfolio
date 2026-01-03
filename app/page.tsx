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
        <div className="grid 2xl:gap-8 lg:gap-8 md:gap-6 sm:gap-4 gap-4 justify-center items-center">
          <div>
            <h1 className="text-center leading-none font-black 2xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl text-3xl">
              Reveal. Scale. Impact.
            </h1>
          </div>

          <div className="flex justify-center">
            <Content
              style="text-center text-xl"
              content="Helping brands grow through expressive visuals and scalable digital systems."
            />
          </div>

          <div className="flex justify-center mt-3">
            <a
              href="/bernales_art_alfred_resume.pdf"
              download="CV_Bernales_Art_Alfred"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 rounded-full 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:py-3 lg:py-3 md:py-3 sm:py-3 py-3 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium main--btn main-btn-color">
                Career Summary
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </main>

      <div className="section grid gap-10">
        <div className="flex justify-center">
          <Content
            style="text-center text-xl"
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

      {/* PROJECTS */}
      <div className="2xl:mt-16 lg:mt-16 md:mt-10 sm:mt-10 mt-10" id="projects">
        <h2 className="text-center 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-2xl text-2xl -ml-0.75 font-black">
          Explore the projects I’ve taken on
        </h2>
      </div>
      <Projects />

      <div className="grid justify-center mt-16">
        <Button
          title="Explore All Project Archive"
          style="main--btn main-btn-color"
          link="/archive"
          Icon="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        ></Button>
      </div>

      {/* JOB EXPERIENCE */}
      <div
        className="grid justify-center 2xl:pt-40 lg:pt-40 md:pt-20 sm:pt-20 pt-20"
        id="experience"
      >
        <JobExperience />
      </div>
    </Container>
  );
}
