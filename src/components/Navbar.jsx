import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { navigation } from "../utils/Data";
import { BagIcon, SearchIcon } from "./Icons";

export const NavbarSection = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navigation.map((item) => (
        <Typography
          as="li"
          className="text-h4 font-header"
        >
          <a href="#" className="flex items-center text-white hover:text-orange">
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="shadow-none bg-opacity-100 border-none bg-black sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src="/images/RecozyLogoWhite.png" alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div>
          <IconButton className="text-white hover:text-orange" variant="text">
            <SearchIcon />
          </IconButton>
          <IconButton className="text-white hover:text-orange" variant="text">
            <BagIcon />
          </IconButton>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};
