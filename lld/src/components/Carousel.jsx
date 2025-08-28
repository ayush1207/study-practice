import { useState } from "react";

const Carousel = () => {
  // const [show, setShow] = useState(0);
  const [data, setData] = useState([
    "https://picsum.photos/id/21/200/300",
    "https://picsum.photos/id/78/200/300?grayscale",
    "https://picsum.photos/id/30/picsum/200/300?blur=2",
    "https://picsum.photos/id/41/200/300?grayscale&blur=2",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    return setCurrentIndex(
      (prevIndex) => (prevIndex + 1 + data.length) % data.length
    );
  };

  const handlePrev = () => {
    return setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const size = data.length;
  return (
    <div className="carouselContainer">
      <div className="positionRelative carouselContent">
        <div className="sidePanel">
          <span onClick={handlePrev}>&lt;</span>
        </div>
        <div className="mainViewer">
          <img src={data[(currentIndex - 1 + size) % size]} alt="" />
          <img src={data[currentIndex]} alt="" />
          <img src={data[(currentIndex + 1 + size) % size]} alt="" />
        </div>
        <div className="sidePanel">
          <span onClick={handleNext}>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
