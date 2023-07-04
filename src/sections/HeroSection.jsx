import React from "react";
import { Typography } from "@material-tailwind/react";
import { OrangeButton } from "../components/Button";

export const HeroSection = () => {
  return (
    <div className="bg-black py-16 md:py-32 hero">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 container mx-auto">
        <div className="flex-2 text-center md:text-left text-white">
          <Typography className="font-header lg:text-h1 sm:text-phone-h1">The Home of Cozy</Typography>
          <Typography className="font-body lg:text-body1 sm:text-phone-body1 mt-4 mb-14">
            Our wide selection of furniture pieces are designed to bring both
            style and comfort to any space.
          </Typography>
          <OrangeButton variant="filled">SHOP NOW</OrangeButton>
        </div>
        <div className="flex-2 mt-8 md:mt-0 w-100 h-full">
          <img
            src="/images/HeroImg.png"
            alt="Hero Image"
            rounded
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
