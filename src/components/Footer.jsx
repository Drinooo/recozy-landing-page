import { Typography } from "@material-tailwind/react";
import React from "react";
import { navigation } from "../utils/Data";

export const FooterSection = () => {
  return (
    <footer className="w-full bg-lightBlue p-8">
      <div className="grid justify-items-center gap-y-6 gap-x-12 text-center">
        <img src="/images/RecozyLogoBlack.png" />
        <ul className="flex flex-wrap justify-center gap-y-2 gap-x-8 ">
          {navigation.map((item) => (
            <li>
              <a href="">
                <Typography
                  href="#"
                  className="text-black font-body hover:text-orange"
                >
                  {item.name}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="container mx-auto">
      <hr className="my-8 border-black" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <Typography color="blue-gray" className="text-body2 font-body">
            &copy; 2023 Recozy | Aldrin Villalobos. All Rights Reserved.
          </Typography>
          <div className="flex flex-wrap justify-center gap-y-6 gap-x-12">
            <Typography color="blue-gray" className="text-body2 font-body">
              Privacy Policy
            </Typography>
            <Typography color="blue-gray" className="text-body2 font-body">
              Terms of Service
            </Typography>
            <Typography color="blue-gray" className="text-body2 font-body">
              Cookies Settings
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
