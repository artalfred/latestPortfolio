import Image from "next/image";
import Description from "./Description";
import projectsData from "@/app/Data/projects.json";
import Link from "next/link";

type Tool = { name: string; icon?: string };
type Project = {
  name: string;
  description: string;
  link: string;
  src: string;
  tools: Tool[];
};

export default async function Projects() {
  const data = projectsData as Project[];

  return (
    <div>
      {data.slice(0, 2).map((project) => (
        <Link
          href={project.link}
          key={project.name}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="sm:mt-6 mt-12 flex justify-center">
            <div className="grid justify-center items-center gap-12 ">
              <div className="2xl:hover:bg-[#1f2937]/60 lg:hover:bg-[#1f2937]/60 md:hover:none sm:hover:none transition-colors duration-300 2xl:p-12 lg:p-12 md:p-0 sm:p-0 p-0 rounded-[20px]">
                <div>
                  <Image
                    src={project.src}
                    alt={project.name}
                    width={0}
                    height={0}
                    className="hover:scale-101 duration-400 ease-in rounded-t-2xl w-full h-auto object-contain"
                  />
                </div>

                <div className="grid 2xl:gap-4 lg:gap-4 md:gap-6 sm:gap-4 gap-4 2xl:mt-8 lg:mt-8 md:mt-6 sm:mt-4 mt-4">
                  <h3 className="2xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl -ml-0.75 font-black">
                    {project.name}
                  </h3>
                  <div className="grid gap-6">
                    <Description
                      style="text-start"
                      content={project.description}
                    />

                    <div className="w-full">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                        {project.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className="box inline-flex items-center gap-2 px-3 py-2 rounded-full  text-teal-300 bg-teal-400/10"
                          >
                            {tool.icon && (
                              <Image
                                src={tool.icon}
                                alt={`${tool.name} icon`}
                                width={18}
                                height={18}
                                className="shrink-0"
                              />
                            )}
                            <p>{tool.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
