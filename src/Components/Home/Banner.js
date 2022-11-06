import React from "react";
import { Carousel } from "react-responsive-carousel";

import image1 from "../../Assets/Images/card1.jpg";
import image2 from "../../Assets/Images/card2.jpg";
import image3 from "../../Assets/Images/card3.jpg";
import image4 from "../../Assets/Images/card4.jpg";

const Banner = () => {
  const props = {
    showArrows: false,
    showStatus: false,
    autoPlay: true,
    showThumbs: false,
  };
  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <Carousel {...props}>
          <div>
            <img
              src={image1}
              alt="image1"
              className="h-[370px] rounded-[50px]"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="image2"
              className="h-[370px] rounded-[50px]"
            />
          </div>
          <div>
            <img
              src={image3}
              alt="image3"
              className="h-[370px] rounded-[50px]"
            />
          </div>
          <div>
            <img
              src={image4}
              alt="image4"
              className="h-[370px] rounded-[50px]"
            />
          </div>
          <div>
            <img
              src={image3}
              alt="image3"
              className="h-[370px] rounded-[50px]"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
