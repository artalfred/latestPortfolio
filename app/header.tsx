import Image from "next/image";
import Button from "./components/Button";
import Menu from "./components/Menu";

import Logo from "@/public/Logo/Logo.svg";
import Logo1 from "@/public/Logo/Logo1.svg";

export default function Header() {
  return (
    <div className="mx-auto 2xl:px-40 lg:px-20 md:px-10 sm:px-10 px-5 mt-6 fixed w-full z-10">
      <div className=" w-full 2xl:px-8 lg:px-8 md:px-8 sm:p-2 p-2 rounded-full bg-sky-700/25 backdrop-blur-lg flex justify-between items-center nav">
        <div className="grid">
          <div className="grid">
            {/* <Link href="/" className="">
              <div className="2xl:block lg:block md:block sm:hidden hidden 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-4 pl-4">
                <h6 className="">Art Alfred</h6>

                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <h6 className="text-[12px]">Metro Manila, Philippines</h6>
                </div>
              </div>
            </Link> */}

            <div className="2xl:block lg:block md:block sm:block block 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-3 pl-3">
              <Image
                src={Logo1}
                alt="Bernales.logo.aa"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center 2xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 gap-2">
            <Button
              title="Connect with me"
              style="main--btn main-btn-color"
              link="/"
            ></Button>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
