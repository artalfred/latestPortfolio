import Image from "next/image";
import Button from "./components/Button";

import Logo from "@/public/Logo/Logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-auto 2xl:px-40 lg:px-20 md:px-10 sm:px-10 px-4 2xl:mt-8 lg:mt-8 md:mt-8 sm:mt-6 mt-6 fixed w-full z-10">
      <div className="w-full 2xl:px-8 lg:px-8 md:px-8 sm:p-4 p-3 rounded-full bg-sky-700/25 backdrop-blur-lg flex justify-between items-center">
        <div className="grid">
          <Link href="/">
            <div className="2xl:block lg:block md:block sm:block block 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-2 pl-2">
              <Image
                src={Logo}
                alt="Bernales.logo.aa"
                className="2xl:w-30 lg:w-30 md:w-25 sm:w-22 w-20"
              />
            </div>
          </Link>
        </div>

        <div>
          <div className="flex items-center 2xl:gap-14 lg:gap-14 md:gap-6 sm:gap-2 gap-4">
            <ul className="flex items-center gap-8 ">
              <Link
                href="/projecs"
                className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
              >
                <li className="cursor-pointer">Blogs</li>
              </Link>
              <Link
                href="#experience"
                className="2xl:block lg:block md:hidden sm:hidden hidden"
              >
                <li className="cursor-pointer">Experience</li>
              </Link>
              <Link
                href="#projects"
                className="2xl:block lg:block md:hidden sm:hidden hidden"
              >
                <li className="cursor-pointer">Projects</li>
              </Link>
            </ul>

            <div className="">
              <Button
                title="Let’s Talk"
                style="main--btn main-btn-color"
                link="https://mail.google.com/mail/?view=cm&fs=1&to=bernalesartalfred@email.com"
                Icon="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
