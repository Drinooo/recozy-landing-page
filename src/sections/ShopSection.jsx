import { Typography } from "@material-tailwind/react";
import React from "react";
import { shopContent } from "../utils/Data";
import { OrangeButton } from "../components/Button";

export const ShopSection = () => {
  return (
    <>
      <div className="bg-lightBlue py-20">
        <div className="container mx-auto space-y-12">
          <div className="lg:grid md:flex text-black flex-wrap justify-start items-end grid-cols-3 gap-4">
            <div className="title col-span-2">
              <Typography className="font-header lg:text-h2 sm:text-phone-h2">
                SHOP OUR FURNITURE PIECES
              </Typography>
              <Typography className="font-body lg:text-body1 sm:text-phone-body1">
                From cozy living room furniture to chic and modern bedroom
                pieces, you'll find everything you need to furnish your home
                with comfort and style.
              </Typography>
            </div>
            <div className="button flex-5 flex md:justify-end sm:justify-start text-white">
              <OrangeButton variant="filled">VIEW ALL</OrangeButton>
            </div>
          </div>

          {/* <Gallery photos={shopContent} /> */}

          <div className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {shopContent.map((item, index) => (
                <div key={index} className={item.size}>
                  <a className="relative block bg-gray-900 group" href="##">
                    <img
                      src={item.src}
                      alt=""
                      className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
                    />
                    <div className="relative p-5">
                      <div className="mt-40">
                        {/* Hidden content */}
                        <div
                          className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                        >
                          <div class="p-2 text-white">
                            <Typography className="font-header text-h3">
                              {item.title}
                            </Typography>
                            <Typography className="font-body text-price">
                              {item.price}
                            </Typography>
                          </div>
                        </div>
                        {/* End of hidden content */}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
