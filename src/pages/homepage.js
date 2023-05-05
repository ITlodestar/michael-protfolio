import React, { useState, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";

import img1 from '../assets/img/Landing Page/Prada Spring_Summer _Thumbnail.jpg';
import img2 from '../assets/img/Landing Page/j ember - Bargain Flights_Thumbnail.jpg';
import img3 from '../assets/img/Landing Page/This is FightCamp_Thumbnail.jpg';
import img4 from '../assets/img/Landing Page/BYP_I AM BYP_Thumbnail.jpg';
import img5 from '../assets/img/Landing Page/Jealous Thumbnail.jpg';
import '../assets/css/home.css';


import video1 from '../assets/video/Prada Spring_Compressed.mp4';
import video2 from '../assets/video/j ember _Bargain Flights_Compressed.mp4';
import video3 from '../assets/video/This is FightCamp _Compressed.mp4';
import video4 from '../assets/video/BYP_I AM BYP_Compressed.mp4';
import video5 from '../assets/video/Jealous - Final ProRes.mp4';
import Videopage from "./Videopage";


import exitbutton from "../assets/Icons/ExitButton.png";


const homedata = {
  producer: [
    { title: "Ciscero", contents: "function", link: "https://www.youtube.com/watch?v=OXe66eyFdoc", videolink: "ciscero" },
    { title: "Def Jam", contents: "i am beau young prince", link: "https://www.youtube.com/watch?v=V-RCCp7Fljs", videolink: "killMoe" },
    { title: "Lady Oflo", contents: "jealous", link: "https://vimeo.com/321125295", videolink: "Jealous" },
    { title: "Beau Young Prince", contents: "kill moe", link: "https://www.youtube.com/watch?v=KSn9kYluxOw", videolink: "BYP" },
    { title: "Obioma", contents: "spring ‘17", link: "https://vimeo.com/221483710", videolink: "Obioma" },
    { title: "Nwar Club", contents: "everybody drinks wine", link: " https://vimeo.com/284630098", videolink: "everybody" },
    { title: "TBD Distillery", contents: "why we make whiskey", link: "https://www.youtube.com/watch?v=HhxzCrkPwE8&t=4s", videolink: "Whiskey" },
  ],
  assistant: [
    { title: "Fight Camp", contents: "this is fight camp", link: "https://www.youtube.com/watch?v=zu1wq8IjAIc", videolink: "fightcamp" },
    { title: "Prada", contents: "spring / summer ‘19", link: "https://vimeo.com/337688483", videolink: "prada" },
    { title: "J. ember", contents: "bargain flights", link: "https://www.youtube.com/watch?v=YZ46fS1OxPU", videolink: "jember" },
  ],
  images_l: [
    { id: 1, imagepath: img1, videopath: video1, author: "prada", width: { width: '300px'}, position: { left: 100, top: 0 } },
    { id: 2, imagepath: img2, videopath: video2, author: "jember", width: { width: '260px'}, position: { left: 160, top: 200 } },
    { id: 3, imagepath: img3, videopath: video3, author: "fightcamp", width: { width: '450px'}, position: { left: 85, top: 360 } },
  ],
  images_r: [
    { id: 4, imagepath: img4, videopath: video4, author: "BYP", width: { width: '300px'}, position: { right: 150, top: 0 } },
    { id: 5, imagepath: img5, videopath: video5, author: "Jealous", width: { width: '375px'}, position: { right: 120, top: 200 } },
  ]
}


const Titlesection = ({ Items, SetDisplayvideo }) => (
  Items.map((item) => (
    <a href={`#${item.videolink}`} key={item.title} onClick={() => SetDisplayvideo(1)} className="text-decoration-none  text-light ">
      <div className="video-title d-flex row p-1 fkex-md-flex align-items-center justify-content-center">
        <div className="col-6 text-end">
          <h5 className="fw-bold d-flex justify-content-end m-0 p-0 align-items-center">{item.title}</h5>
        </div>
        <div className="col-6 text-start">
          <p className="text-uppercase d-flex m-0 p-0 align-items-center fw-light ps-2"> {item.contents} </p>
        </div>
      </div>
    </a>
  ))
);


const Imagesection = ({ Items, setPreview, preview, SetDisplayvideo }) => {
  return Items.map((item) => (

    <div className={item.id % 2 === 0 ? "d-flex justify-content-start justify-content-md-center custom-position" : "d-flex justify-content-end justify-content-md-center custom-position"} 
      key={item.id}
      style={ window.innerWidth > 768 ? item.position: {} }>
      <a
        onMouseEnter={() => setPreview(item.id)}
        onMouseLeave={() => setPreview(0)}
        onClick={() => SetDisplayvideo(1) }
        className={ item.id === 2 ? "d-flex justify-content-center position-relative": "mb-4 d-flex justify-content-center position-relative"}
        data-aos-duration="2000"
        data-aos="zoom-in"
        href={`#${item.author}`}
        style={window.innerWidth > 768 ? item.width : { width: '75%' }}>
        {item.id === preview || window.innerWidth <= 768 ?
          <video
            autoPlay
            muted
            loop
            className='w-110'>
            <source src={item.videopath} type="video/mp4" />
          </video> :
          <img
            src={item.imagepath}
            alt=""
            className="w-68"
            style={ item.id === 3? { marginTop: 35 }: {}}
          />
        }
      </a>
    </div>
  ))
};
// ======Scroll : Start========= //
let delta = 100;
let ctrlInterval;

const setDeltaLimit = () => {
  document.querySelector(".title").style.transform = `translateY(${delta}vh)`;
  if (delta < -150) {
    delta = 100;
  } else if (delta > 100) {
    delta = -150;
  }
}

const titleLoop = () => {
  if (window.location.pathname === '/') {
    ctrlInterval = setInterval(() => {
      setDeltaLimit();
      delta -= 0.5;
    }, 20);
  }
}


const onScrollWheel = (event) => {
  // clearInterval(ctrlInterval);
  delta -= event.deltaY / 20;
  setDeltaLimit();
}

// const onScrollLeave = (event) => {
//   clearInterval(ctrlInterval);
//   titleLoop();
// }


function Homepage() {
  const [preview, setPreview] = useState(0);
  const [displayvideo, SetDisplayvideo] = useState(0);
  const [currentDisplayState, setCurrentDisplayState] = useState(0);
  const titleRef = useRef(null);

  const onScrollEnter = (event) => {
    clearInterval(ctrlInterval);
    setCurrentDisplayState(1);
  }

  useEffect(() => {
    if (displayvideo) {
      clearInterval(ctrlInterval);
      document.querySelector(".title").style.transform = `translateY(${delta}vh)`;
    } else {
      clearInterval(ctrlInterval);
      if (!currentDisplayState) {
        titleLoop();
      }
    }
  }, [displayvideo]);

  // wheel => mouseLeave
  // Producer over tag => mouseEnter
  return (
    <>
      <div className="d-md-flex justify-content-center">
        <div className="center-col"
          ref={titleRef}
          onWheel={(e) => onScrollWheel(e)}>
          <div className="pt-3">
            <div className="d-md-block w-100 text-center title"
              onMouseEnter={(e) => onScrollEnter(e)}
              onTouchStart={(e) => onScrollEnter(e)}
              onTouchMove={(e) => onScrollEnter(e)}>
              <h3 className="pt-4">Producer</h3>
              <Titlesection Items={homedata.producer} SetDisplayvideo={SetDisplayvideo} />
              <h3 className="pt-4">Assistant Director</h3>
              <Titlesection Items={homedata.assistant} SetDisplayvideo={SetDisplayvideo} />
            </div>
          </div>
        </div>
        <div className="images d-flex flex-column order-md-first image-l">
          <Imagesection
            Items={homedata.images_l}
            setPreview={setPreview}
            preview={preview}
            SetDisplayvideo={SetDisplayvideo} />
        </div>
        <div className="images d-flex flex-column image-r">
          <Imagesection
            Items={homedata.images_r}
            setPreview={setPreview}
            preview={preview}
            SetDisplayvideo={SetDisplayvideo} />
        </div>
      </div>
      <div id="video-section" className={displayvideo ? "v-display v-show" : "v-display"} >
        <Videopage SetDisplayvideo={SetDisplayvideo} />
        <div onClick={() => SetDisplayvideo(0)} id="exit-video" className="cursor-pointer " >
          <Image src={exitbutton} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
