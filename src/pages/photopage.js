import React, { useState, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";

import Carouselphoto from "../components/Carouselphoto";

import image1 from '../assets/img/photos/1 Miguel Small.jpg';
import image2 from '../assets/img/photos/2 Charles Small.jpg';
import image3 from '../assets/img/photos/3 Barbershop Small.jpg';
import image4 from '../assets/img/photos/4 TaHa Small.jpg';
import image5 from '../assets/img/photos/5 Chris Small.jpg';
import image6 from '../assets/img/photos/6 Meat Market Small.jpg';
import image7 from '../assets/img/photos/7 CDMX Kitchen Small.jpg';
import image8 from '../assets/img/photos/8 Chinatown Burning Small.jpg';
import image9 from '../assets/img/photos/9 Abraham Small.jpg';
import image10 from '../assets/img/photos/10 Abraham sons Small.jpg';
import image11 from '../assets/img/photos/11 Abraham Family Small.jpg';
import image12 from '../assets/img/photos/12 CDMX Dinner Small.jpg';
import image13 from '../assets/img/photos/13 Brighton Man Small.jpg';
import image14 from '../assets/img/photos/14 Breaktime Small.jpg';
import image15 from '../assets/img/photos/15 Prospect Watering Small.jpg';
import image16 from '../assets/img/photos/16 See Sign Below.jpg';


const images = {
  photos: [
    { path: image1 },
    { path: image2 },
    { path: image3 },
    { path: image4 },
    { path: image5 },
    { path: image6 },
    { path: image7 },
    { path: image8 },
    { path: image9 },
    { path: image10 },
    { path: image11 },
    { path: image12 },
    { path: image13 },
    { path: image14 },
    { path: image15 },
    { path: image16 },
  ]
}



function Photopage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const assetListRef = useRef(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleScroll();
  //   }, 80);
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleScroll = () => {
    const assetList = assetListRef.current;
    if (scrollPosition === 0)
      assetList.scrollLeft += 50
  };

  const onMouseWheel = (event) => {
    // const element = document.getElementById ? document.getElementById("container") : document.all.container;
    // let wheelDistance = 0;

    // if (event.deltaY) {
    //   wheelDistance = event.deltaY;
    // } else if (event.wheelDelta) {
    //   wheelDistance = event.wheelDelta / -120;
    // } else if (event.detail) {
    //   wheelDistance = event.detail * 40;
    // }

    // if (element) {
    //   element.scrollLeft += wheelDistance < 0 ? 300 : -300;
    // }
    const element = document.getElementById("container");
    const wheelDistance = event.deltaY;
    element.scrollLeft += wheelDistance > 0 ? 300 : -300;
  };

  // useEffect(() => {
  //   document.getElementById("container").addEventListener("wheel", onMouseWheel);
  //   return () => {
  //     document.getElementById("container").removeEventListener("wheel", onMouseWheel);
  //   };
  // }, []);


  return (
    <div className="position-absolute image-slider">
      <div>
        <div className="d-none d-md-block " >
          <div className="d-flex w-100 assetList" id="container"
            ref={assetListRef}
            style={{ overflowX: 'scroll' }}
            onMouseOver={() => setScrollPosition(1)}
            onMouseLeave={() => setScrollPosition(0)}
            onWheel={(e) => onMouseWheel(e)} >
            {
              images.photos.map((item) => (
                <Image style={{ height: '75vh' }} className="p-2" key={item.path} src={item.path} alt="" />
              ))
            }
          </div>
        </div>
      </div>

      <div className="d-grid d-md-none">
        {
          images.photos.map((item) => (
            <Image className="w-100 p-2" key={item.path} src={item.path} alt="" />
          ))
        }
      </div>
    </div>
  );
}

export default Photopage;
