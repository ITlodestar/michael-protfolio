import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
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

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

const homedata = {
  producer: [
    { title: "Ciscero", contents: "function", link: "https://www.youtube.com/watch?v=OXe66eyFdoc" },
    { title: "Def Jam", contents: "i am beau young prince", link: "https://www.youtube.com/watch?v=V-RCCp7Fljs" },
    { title: "Lady Oflo", contents: "jealous", link: "https://vimeo.com/321125295", href: "Jealous" },
    { title: "Beau Young Prince", contents: "kill moe", link: "https://www.youtube.com/watch?v=KSn9kYluxOw" },
    { title: "Obioma", contents: "spring ‘17", link: "https://vimeo.com/221483710", href: "Obioma" },
    { title: "Nwar Club", contents: "everybody drinks wine", link: " https://vimeo.com/284630098" },
    { title: "TBD Distillery", contents: "why we make whiskey", link: "https://www.youtube.com/watch?v=HhxzCrkPwE8&t=4s" },
  ],
  assistant: [
    { title: "Fight Camp", contents: "this is fight camp", link: "https://www.youtube.com/watch?v=zu1wq8IjAIc" },
    { title: "Prada", contents: "spring / summer ‘19", link: "https://vimeo.com/337688483" },
    { title: "J. ember", contents: "bargain flights", link: "https://www.youtube.com/watch?v=YZ46fS1OxPU" },
  ],
  images_l: [
    { id: 1, imagepath: img1, videopath: video1 },
    { id: 2, imagepath: img2, videopath: video2 },
    { id: 3, imagepath: img3, videopath: video3 },
  ],
  images_r: [
    { id: 4, imagepath: img4, videopath: video4 },
    { id: 5, imagepath: img5, videopath: video5 },
  ]
}


const Titlesection = ({ Items }) => (
  Items.map((item) => (
    <a href={item.link} key={item.title} className="text-decoration-none  text-light ">
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
    <div
      className={item.id % 2 == 0 ? "d-flex justify-content-start justify-content-md-center" : "d-flex justify-content-end justify-content-md-center"} key={item.id}>
      <a
        onMouseEnter={() => setPreview(item.id)}
        onMouseLeave={() => setPreview(0)}
        onClick={() => SetDisplayvideo(1)}
        className="w-75 m-4 d-flex justify-content-center"
        data-aos-duration="2000"
        data-aos="zoom-in"
        href={`#${item.id}`}>
        {item.id === preview ?
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
            className="w-100 me-3"
          />
        }
      </a>
    </div>
  ))
};
// ======Scroll : Start====== //
var delta = 100;
var ctrlInterval;

const setDeltaLimit = () => {
  document.querySelector(".title").style.transform = `translateY(${delta}%)`;
  if (delta < -150) {
    delta = 100;
  } else if (delta > 100) {
    delta = -150;
  }
}

const titleLoop = () => {
  ctrlInterval = setInterval(() => {
    if (window.location.pathname == '/') {
      setDeltaLimit();
    }
    delta -= 0.5;
  }, 20);
}

document.body.onload = () => {
  titleLoop();
};

const onScrollWheel = (event) => {
  delta -= event.deltaY / 20
  setDeltaLimit();
}

const onScrollEnter = (event) => {
  clearInterval(ctrlInterval);
}

const onScrollLeave = (event) => {
  titleLoop();
}
// ======Scroll : End====== //

function Homepage() {
  const [preview, setPreview] = useState(0);
  const [displayvideo, SetDisplayvideo] = useState(0);
  const titleRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.set(document.querySelectorAll('.section-video .revealUp'), { opacity: 0.0001, y: '100%' });
    gsap.set(document.querySelectorAll('.section-video'), { opacity: 1 });
    // REVEAL // 
    gsap.utils.toArray(".revealUp").forEach(function (elem) {

      ScrollTrigger.create({
        trigger: elem,
        start: "center center",
        end: "bottom top",
        scroller: "#video-section",
        scrub: 1,

        onEnter: function () {
          gsap.to(
            elem,
            { opacity: 1, y: '0%', ease: 'power4.inOut', duration: 1.2, stagger: 0.01 }
          );
        },
        onEnterBack: function () {
          gsap.to(
            elem,
            { opacity: 1, y: '0%', ease: 'power4.inOut', duration: 1.2, stagger: 0.01 }
          );
        },
        onLeave: function () {
          gsap.to(
            elem,
            { opacity: 0.0001, y: '50%', rotation: '0deg', ease: 'power4.inOut', duration: 1.2, stagger: 0.01, delay: 2 }
          );
        },
        onLeaveBack: function () {
          gsap.to(
            elem,
            { opacity: 0.0001, y: '50%', rotation: '0deg', ease: 'power4.inOut', duration: 1.2, stagger: 0.01, delay: 2 }
          );
        }
      });
    });
  });

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // REVEAL // 
  //   gsap.utils.toArray(".revealUp").forEach(function (elem) {

  //     ScrollTrigger.create({
  //       trigger: elem,
  //       start: 'top center',
  //       end: '+=250',
  //       scroller: "#video-section",
  //       scrub: 6,

  //       onEnter: function () {
  //         gsap.fromTo(
  //           elem,
  //           {
  //             autoAlpha: 0,
  //             transform: `translateY(50%)`,
  //             opacity: 0.0001, y: '200%', rotation: '3deg'

  //           },
  //           {
  //             transform: `translateY(0%)`,
  //             autoAlpha: 1
  //           }
  //         );
  //       },
  //       onLeaveBack: function () {
  //         gsap.fromTo(
  //           elem,

  //           {
  //             autoAlpha: 1,
  //             transform: `translateY(0%)`
  //           },
  //           {
  //             transform: `translateY(50%)`,
  //             autoAlpha: 0
  //           }
  //         );
  //       }
  //     });this is ========
  //   });
  // }, [])



  return (
    <>
      <div className="d-md-flex align-items-center justify-content-center">
        <div className="center-col"
          ref={titleRef}
          onWheel={(e) => onScrollWheel(e)}
          onMouseEnter={(e) => onScrollEnter(e)}
          onMouseLeave={(e) => onScrollLeave(e)}>
          <div>
            <div className="d-md-block w-100 text-center title">
              <h3 className="py-4">Producer</h3>
              <Titlesection Items={homedata.producer} />
              <h3 className="py-4">Assistant Director</h3>
              <Titlesection Items={homedata.assistant} />
            </div>
          </div>
        </div>
        <div className="images d-flex flex-column order-md-first ">
          <Imagesection Items={homedata.images_l} setPreview={setPreview} preview={preview} SetDisplayvideo={SetDisplayvideo} />
        </div>
        <div className="images d-flex flex-column">
          <Imagesection Items={homedata.images_r} setPreview={setPreview} preview={preview} SetDisplayvideo={SetDisplayvideo} />
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
