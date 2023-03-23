import { SecondBannerData } from "@/Constants";
import useMediaQuery from "@/Hooks/UseMediaQuery";
import {
  ComputerScreen,
  Globus,
  Light,
  Pencil,
  ReactSvg,
  SolarSystem,
} from "@/public";
import styles from "@/styles";
import React from "react";
import { SecondBannerComponents } from "./SecondBannerComponents";

export const SecondBanner = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1024px)");

  return (
    <section
      className={`${styles.innerWidth} ${styles.flexCenter}  md:flex-row flex-col-reverse py-10 gap-16 mx-auto mt-20 `}
    >
      <div className="md:-mb-[6rem] relative self-start md:self-center md:min-w-[27rem]  max-w-[27rem]">
        <img src="./Images/Banners/Banner2.webp" className="w-full" alt="" />
        {isAboveSmallScreens && (
          <React.Fragment>
            <div className="absolute -left-10 top-20">
              <Light />
            </div>
            <div className="absolute -left-20 top-60">
              <ComputerScreen />
            </div>
            <div className="absolute bottom-10 -left-10">
              <Globus />
            </div>
            <div className="absolute right-0 top-0">
              <ReactSvg />
            </div>
            <div className="absolute -right-20 top-60">
              <Pencil />
            </div>
            <div className="absolute bottom-14 -right-12">
              <SolarSystem />
            </div>
          </React.Fragment>
        )}
      </div>

      <div className="md:w-[50rem] w-full self-start">
        <h1 className="md:text-[59px] sm:text-[2.5rem] text-[25px] font-extrabold w-full">
          Premium <span className="text-[#FF7426]"> Learning </span>
          Experience
        </h1>

        <div className="mt-10 flex flex-col gap-10">
          {SecondBannerData.map((Data) => (
            <SecondBannerComponents key={Data.title} {...Data} />
          ))}
        </div>
      </div>
    </section>
  );
};
