import Button from "./components/Button";
import Container from "./components/Container";
import Menu from "./components/Menu";

export default function Header() {
  return (
    <div className="mx-auto 2xl:px-40 lg:px-20 md:px-10 sm:px-10 px-5 mt-6 fixed w-full z-10 shadow-2xl">
      <div className=" w-full 2xl:px-8 lg:px-8 md:px-8 sm:p-2 p-2 rounded-full bg-[#050a30]/25 backdrop-blur-lg flex justify-between items-center nav">
        <div className="grid 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-4 pl-4">
          <div className="grid">
            <h3 className="2xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg font-medium">
              Fred Bernales
            </h3>
            <h3 className="2xl:text-sm lg:text-lg md:text-md sm:text-sm text-sm">
              Web Developer · AI Automation
            </h3>
          </div>
        </div>

        <div>
          <div className="flex items-center 2xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 gap-2">
            <Button
              title="Connect with me"
              bgColor="main-btn-color"
              style="main--btn"
              fontSize="text-md"
              link="/"
            ></Button>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
