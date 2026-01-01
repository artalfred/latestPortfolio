import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  ArrowTurnDownRightIcon,
  ArrowTurnLeftDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    name: "Blogs",
    href: "#",
    icon: ArrowTurnDownRightIcon,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: ArrowTurnLeftDownIcon,
  },
  {
    name: "Experience",
    icon: ArrowTurnLeftDownIcon,
  },
];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

export default function Menu() {
  return (
    <Popover className="flex items-center">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white cursor-pointer outline-0">
        <div className="bg-sky-700/10 hover:bg-sky-700/20 transition ease-in-out 0 p-4 rounded-full z-10 duration-200 menu">
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
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute top-0 right-0 z-10 2xl:mt-25 lg:mt-25 md:mt-20 sm:mt-22 mt-22 bg-transparent transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in 2xl:w-120 lg:w-110 md:w-110 sm:w-full"
      >
        <div className=" flex-auto overflow-hidden rounded-xl bg-gray-800 text-sm/6 outline-1 -outline-offset-1 outline-white/10">
          <div className="2xl:p-4 lg:p-4 md:p-4 sm:p-2 p-2">
            <div className="group relative grid items-center gap-x-6  p-4 hover:bg-white/5">
              <div className="border-b p-4 flex items-center gap-3">
                <ArrowTurnDownRightIcon
                  className="w-7.5 h-7.5"
                  strokeWidth={2}
                />
                <Link href="/" className="font-medium text-white text-xl ">
                  Blog
                  <span className="absolute inset-0" />
                </Link>
              </div>

              <Link
                href="#projects"
                className="font-medium text-white text-xl border-b p-4"
              >
                Projects
                <span className="absolute inset-0" />
              </Link>

              <Link
                href="#experience"
                className="font-medium text-white text-xl border-b p-4"
              >
                Experience
                <span className="absolute inset-0" />
              </Link>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700/50"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-500"
                />
                {item.name}
              </a>
            ))}
          </div> */}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
