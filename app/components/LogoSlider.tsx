"use client";
import Slider from "react-infinite-logo-slider";

import Image from "next/image";

import VAStuffingHub from "../../public/Logo/VAStaffingHub.svg";
import NLBB from "../../public/Logo/NextLevelBusinessbrokers.svg";
import TheSetupPro from "../../public/Logo/TheSetupPro.svg";
import DCC from "../../public/Logo/DCC.svg";

export default function LogoSlider() {
  return (
    <div className="edge-mask">
      <Slider
        width="160px"
        duration={25}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        <Slider.Slide>
          <div className="px-6">
            <Image
              src={TheSetupPro}
              width={160}
              height={70}
              alt="De Castro Legal Firm"
            />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="px-6">
            <Image src={NLBB} width={160} height={70} alt="NLBB" />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="px-6">
            <Image
              src={DCC}
              width={160}
              height={70}
              alt="De Castro Consulting"
            />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="px-6">
            <Image
              src={VAStuffingHub}
              width={160}
              height={70}
              alt="VA Staffing Hub"
            />
          </div>
        </Slider.Slide>
      </Slider>
    </div>
  );
}
