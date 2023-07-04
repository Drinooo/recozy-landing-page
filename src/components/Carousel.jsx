import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { cardContent } from "../utils/Data";
import AliceCarousel from "react-alice-carousel";
import { ChevronLeft, ChevronRight } from "./Icons";
import { TextButton } from "./Button";

export const CustCarousel = () => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  };

  const renderDotsItem = (item) => (
    <Typography
      className={`custom-dot ${item.isActive ? "active" : "inactive"}`}
      variant="text"
    />
  );

  const renderPrevButton = () => (
    <Button variant="text" className="bg-0 text-black">
      <ChevronLeft />
    </Button>
  );

  const renderNextButton = () => (
    <Button variant="text" className="bg-0 text-black">
      <ChevronRight />
    </Button>
  );

  return (
    <div className="carousel">
      <AliceCarousel
        responsive={responsive}
        activeIndex={0}
        animationType="fade"
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderDotsItem={renderDotsItem}
        mouseTracking
      >
        {cardContent.map((item) => (
          <Card className={`${item.isLeft ? "living" : "bedroom"}`}>
            <CardBody className="text-black lg:mt-24 sm:mt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-header lg:text-h4 sm:text-phone-h4 mb-2"
              >
                {item.title}
              </Typography>
              <Typography className="font-body lg:text-body2 sm:text-phone-body2 mb-2">
                {item.desc}
              </Typography>
              <TextButton variant="text">
                VIEW COLLECTION
                <ChevronRight strokeWidth={2} className="h-5 w-5" />
              </TextButton>
            </CardBody>
          </Card>
        ))}
      </AliceCarousel>
    </div>
  );
};
