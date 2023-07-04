import { Typography } from "@material-tailwind/react";
import React from "react";
import { OrangeButton } from "../components/Button";

export const CTASection = () => {
  return (
    <div className="pb-28">
      <section className="">
        <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/CTABg.png')]">
          <div className="h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)]">
            <div className="flex h-full items-center justify-center py-20">
              <div className="px-6 text-center text-white md:px-12">
                <Typography className="font-header lg:text-h2 sm:text-phone-h2">
                  Experience Comfort and Style
                </Typography>
                <Typography className="font-body lg:text-body1 sm:text-phone-body1 pb-8">
                  Shop our wide selection of stylish and comfortable furniture
                  pieces now and discover the perfect addition to your home.
                </Typography>
                <OrangeButton variant="filled">VIEW ALL</OrangeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
