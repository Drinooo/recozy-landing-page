import { Rating, Typography } from "@material-tailwind/react";
import React from "react";
import { testimonials } from "../utils/Data";

export const TestimonialSection = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <Typography className="font-header lg:text-h2 sm:text-phone-h2 ">
          hear from our satisfied customers
        </Typography>
        <Typography className="mb-12 font-body lg:text-body1 sm:text-phone-body1">Read what our satisfied customers have to say about their experiences shopping at Recozy.</Typography>
        
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 text-center">
          {testimonials.map((item) => (
            <div className={item.class}>
              <div className="mb-6 flex justify-center">
                <img
                  src={item.img}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <Typography className="mb-2 font-header lg:text-h6 sm:text-phone-h6">
                {item.name}
              </Typography>
              <Typography className="mb-4 font-body lg:text-position sm:text-phone-position">
                {item.occupation}
              </Typography>
              <Typography className="mb-4 font-body lg:text-body2 sm:text-phone-body2">
                {item.caption}
              </Typography>
              <Rating value={item.value} readonly />
            </div>
            ))}
          </div>
        
      </section>
    </div>
  );
};
