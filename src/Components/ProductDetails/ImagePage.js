import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../Assets/Images/card1.jpg";
import { default as image2 } from "../../Assets/Images/card2.jpg";
import image3 from "../../Assets/Images/card3.jpg";
import image4 from "../../Assets/Images/card4.jpg";

const ImagePage = () => {
  const [imag, setimag] = useState(image1);
  const imagepack = [
    {
      id: 1,
      img: image1,
    },
    {
      id: 2,
      img: image2,
    },
    {
      id: 3,
      img: image3,
    },
    {
      id: 4,
      img: image4,
    },
    {
      id: 5,
      img: image2,
    },
  ];

  const prop1 = {
    width: 600,
    height: 220,
    img: imag,
    zoomPosition: "original",
  };

  return (
    <>
      <div className="p-5">
        <div className="w-full h-[220px] bg-green-400">
          <ReactImageZoom {...prop1} />
          {/* <img src={`${imag}`} alt="" className="w-full h-[220px]" /> */}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {imagepack.map((imgitem) => {
            return (
              <div onClick={() => setimag(imgitem.img)}>
                <img src={imgitem.img} alt="image1" width="500" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImagePage;
