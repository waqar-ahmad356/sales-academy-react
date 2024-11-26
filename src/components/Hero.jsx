import React from "react";
import hero_img from "../assets/hero-img.png";
import hero_box_img from '../assets/hero-box-img.png';
import hero_announcement from '../assets/hero-annoucement-icon.png';
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F3F3F5]">
        <div className="max-w-[1440px] mx-auto my-0 px-0  ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
            <div className="flex flex-col items-start  gap-8 lg:px-[80px] px-4 py-6 md:text-left  text-center ">
              <div className="flex flex-col items-start gap-[18px]">
                <div className="flex flex-col md:items-start items-center gap-[6px]">
                  <span className="md:text-[16px] text-[12px]  text-[#484A54] leading-6 font-normal rounded-[16px] px-4 border-[1px] solid border-[#D9DADF]">
                    Learn in a practical way and get started
                  </span>

                  <h1 className="md:text-[60px] text-[40px] text-[#181818] font-bold md:leading-[72px] leading-[54px]  ">
                    Start Your Future In Sales Academy
                  </h1>
                  <svg className="max-w-[100%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="364"
                    height="12"
                    viewBox="0 0 364 12"
                    fill="none"
                  >
                    <path
                      d="M2 2.02829C49.131 2.02829 96.2648 1.96464 143.395 2.02829C217.331 2.12815 288.809 6.72042 362 10"
                      stroke="#FCA311"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <p className="text-[16px] text-[#373940] leading-6 font-normal">
                  Funded by the state, supported by experts. We’ll get you ready
                  for a successful career in sales. 100% funded, 100% practical,
                  100% remote.
                </p>
              </div>
              <div className="px-3 py-8 bg-[#FAFAFA] hidden md:rounded-xl md:flex md:items-start  md:w-[384px] md:h-[132px] relative gap-3">
                <img src={hero_box_img} alt="hero_box_img"  />
                <div className="flex flex-col items-start gap-1">
                    <p className="text-[24px] text-[#181818] leading-8 font-semibold ">20, Jan 2025</p>
                    <p className="text-[24px] text-[#FCA311] leading-8 font-semibold ">Nachster Kursstart</p>
                </div>
                
                <img src={hero_announcement} className="absolute right-3 top-[11px]" alt="hero-annoucment"/>
              </div>
              <div className="mx-auto md:hidden">
              <Button value="Non-Binding Inquiry " className="px-4 py-3 "/>
              </div>
            </div>
            <div className="">
              <img src={hero_img} alt="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
