import { Typography } from "@material-tailwind/react";
import React from "react";
import { featured } from "../utils/Data";

export const FeaturedSection = () => {
  return (
    <div class="container mx-auto text-black pt-24 pb-24">
      <div className="grid justify-items-center gap-y-6 gap-x-12 text-center pb-10">
        <Typography className="font-header text-h3">As Featured In</Typography>
      </div>
      <div className="flex flex-wrap flex-row justify-between gap-y-8">
        {featured.map((item, index) => (
          <div key={index}>
            <img src={item.img} className="lg:w-full sm:w-24" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
