import React from "react";

import useMediaQuery from "@/Hooks/UseMediaQuery";
import {
  Circle,
  ComputerScreen,
  Globus,
  Light,
  Pencil,
  ReactSvg,
  RulerTriangle,
  ScienceGlass,
  Search,
} from "@/public";
import { MainButton } from "../Buttons/MainButton";

export const MainBanner = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1024px)");
  const isAboveExtraSmallScreens = useMediaQuery("(min-width:600px)");
  return (
    <section
      className={`max-w-[1920px]   w-11/12  px-6 mx-auto relative pb-[9rem] pt-[9rem] md:flex md:justify-between`}
    >
      {isAboveExtraSmallScreens && (
        <React.Fragment>
          <div className="absolute top-30 left-0 z-40">
            <Circle />
          </div>
          <div className="absolute bottom-12 right-0">
            <Globus />
          </div>
          <div className="absolute left-[50%]">
            <ComputerScreen />
          </div>
          <div className="absolute bottom-10 left-[40%]">
            <ReactSvg />
          </div>
          <div className="absolute bottom-10 -left-8">
            <RulerTriangle />
          </div>
        </React.Fragment>
      )}
      {isAboveSmallScreens && (
        <React.Fragment>
          <div className="absolute left-[80%] top-[5rem]">
            <Light />
          </div>
          <div className="absolute right-0 bottom-[12.5rem]">
            <Pencil />
          </div>

          <div className="absolute bottom-10 left-[60%]">
            <ScienceGlass />
          </div>
        </React.Fragment>
      )}
      <div
        className="flex 
      flex-col gap-4 md:w-[40rem] sm:w-[30rem] w-full md:basis-2/5"
      >
        <div className="sm:text-[60px] text-[40px] font-bold  ">
          The <span className="text-secondary">Smart </span>
          Choice For <span className="text-secondary">Future</span>
        </div>

        <p className="text-[#8A8A8A]">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush
          the...
        </p>

        <form className="relative">
          <div className="absolute z-10 top-3 left-2">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search For Location..."
            className="py-3 px-10 w-full rounded-xl relative outline-none"
            name="location"
          />

          <div className="absolute top-1 right-2">
            <MainButton size="md" color="blue">
              Continue
            </MainButton>
          </div>
        </form>
      </div>
      {isAboveSmallScreens && (
        <div className="basis-2/3 max-w-[40rem]">
          <img src="./Images/Banners/Banner1.webp" className="w-full" alt="" />
        </div>
      )}
    </section>
  );
};
