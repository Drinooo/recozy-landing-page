import {
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { CustCarousel } from "../components/Carousel";
import { OrangeButton } from "../components/Button";

export const CollectionSection = () => {
  return (
    <>
      <div className="container mx-auto space-y-12 pb-24">
        <div className="lg:grid md:flex text-black flex-wrap justify-start items-end grid-cols-3 gap-4">
          <div className="title col-span-2">
            <Typography className="font-header lg:text-h2 sm:text-phone-h2">
              Discover Our Furniture Collection
            </Typography>
            <Typography className="font-body lg:text-body1 sm:text-phone-body1">
              Browse our wide selection of furniture for every room in your
              home, including the living room, bedroom, dining room, and more.
            </Typography>
          </div>
          <div className="button flex-5 flex md:justify-end sm:justify-start text-white">
            <OrangeButton variant="filled">VIEW ALL</OrangeButton>
          </div>
        </div>
        <CustCarousel />
      </div>
    </>
  );
};
