import JobData from "@/app/Data/Job.json";
import Link from "next/link";

type Tool = { name: string; icon?: string };
type Job = {
  year: string;
  name: string;
  description: string;
  link: string;
  tools: Tool[];
};

export default function JobExperience() {
  const data = JobData as Job[];

  return (
    <div className="relative isolate overflow-hidden lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h2>Experience</h2>
              <h3 className="text-2xl">Front End Developer</h3>
            </div>

            <h6 className="text-md text-gray-400">
              I create inclusive, pixel-perfect websites that combine
              functionality with exceptional design.
            </h6>
          </div>
        </div>

        <div>
          <div className="group grid gap-2">
            {data.map((job) => (
              <Link
                key={job.name}
                href={job.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="job--card 2xl:flex lg:flex md:grid sm:grid grid gap-6 items-start p-6 rounded-lg  hover:bg-sky-500/10 group-hover:opacity-40 hover:opacity-100 transition-all duration-200 ease-in-out">
                  <div className="2xl:w-[20%] lg:w-[30%] md:w-full w-full">
                    <h4 className="uppercase text-gray-400">{job.year}</h4>
                  </div>

                  <div className="2xl:w-[80%] lg:w-[70%] md:w-full sm:w-full w-full text-gray-400">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-50 text-lg">{job.name}</h3>
                        <div className="mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="blue"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="#fff"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-md">{job.description}</p>

                      <div className="w-full">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-2">
                          {job.tools.map((tool) => (
                            <div key={tool.name}>
                              <div className="box inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-teal-300 bg-teal-400/10">
                                <h3 className="text-sm">{tool.name}</h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
