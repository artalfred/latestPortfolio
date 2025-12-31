import Link from "next/link";
import Container from "../components/Container";
import projectsData from "@/app/Data/projects.json";
import { Metadata } from "next";

type Tool = { name: string; icon?: string };
type Project = {
  name: string;
  madeAt: string;
  description: string;
  link: string;
  ProjectNameLink: string;
  src: string;
  year: string;
  tools: Tool[];
};

export const metadata: Metadata = {
  title: "Archive | Art Alfred Bernales",
  description:
    "I help brands grow through bold visuals and thoughtful digital experiences that drive results.",
};

export default function Archive() {
  const data = projectsData as Project[];

  return (
    <Container>
      <main className="2xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40 mt-40">
        <div>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center border-b-2 pb-1 border-gray-500 hover:border-gray-300 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
                  />
                </svg>

                <h6 className="2xl:text-sm lg:text-sm md:text-sm sm:text-sm text-sm font-medium">
                  Art Alfred Bernales
                </h6>
              </div>
            </div>
          </Link>
          <h3 className="2xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl -ml-0.75 font-black mt-2">
            All Projects
          </h3>
        </div>

        <div className="w-full mt-13">
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            <thead className="sticky top-0 border-slate-300/10  px-6 py-5 backdrop-blur z-0">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((project) => (
                <tr
                  className="border-b border-slate-300/10 last:border-none"
                  key={project.name}
                >
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px">{project.year}</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Emerson Collective (opens in a new tab)"
                        >
                          <span>
                            {project.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="hidden sm:block">{project.name}</div>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap ">
                      {project.madeAt}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-2">
                      {project.tools.slice(1).map((tool) => (
                        <div key={tool.name}>
                          <div className="box inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-teal-300 bg-teal-400/10">
                            <h6 className="text-[12px]">{tool.name}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="translate-y-1">
                      <li className="mb-1 flex items-center">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="emersoncollective.com (opens in a new tab)"
                        >
                          <span>
                            {project.ProjectNameLink}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
}
