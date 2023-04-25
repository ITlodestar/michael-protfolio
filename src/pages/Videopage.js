import React, { useRef, useLayoutEffect, useState } from "react";
import { Image } from "react-bootstrap";

import image1 from '../assets/img/video/j ember - Bargain Flights_Slide in.jpg';
import image2 from '../assets/img/video/Prada Spring_Summer _Slide in Final.jpg';
import image3 from '../assets/img/video/Function by Ciscero_Slide in Final.jpg';
import image4 from '../assets/img/video/This is FightCamp _ Slide in Final.jpg';
import image5 from '../assets/img/video/BYP Final.jpg';
import image6 from '../assets/img/video/Kill Moe Slide in Final.jpg';
import image7 from '../assets/img/video/Jealous_Slide in Final.jpg';
import image8 from '../assets/img/video/Nwar Slide in Final.jpg';
import image9 from '../assets/img/video/Obioma Slide in Final.jpg';
import image10 from '../assets/img/video/Tobacco Barn Distillery_Slide in Final.jpg';
import playIcon from "../assets/Icons/Play.png";

const images = {
  video: [
    { key: "video1", path: image1, link: "https://www.youtube.com/watch?v=YZ46fS1OxPU", author: "J. Ember", title: "Bargain Flights", s_author: "Dir. Jackson Tisi", s_contents: "EP. Patrick Donovan", id: "J. Ember" },
    { key: "video2", path: image2, link: "https://vimeo.com/337688483", author: "Prada", title: "Spring Summer", s_author: "Dir. Matthew Dillon Cohen", s_contents: "EP. Patrick Donovan", id: "Prada" },
    { key: "video3", path: image3, link: "https://www.youtube.com/watch?v=OXe66eyFdoc", author: "Ciscero", title: "Function", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { key: "video4", path: image4, link: "https://www.youtube.com/watch?v=zu1wq8IjAIc", author: "Fight Camp", title: "", s_author: "Dir. Tobias Nathan", s_contents: "EP. Emi Stewart", id: "Fight Camp" },
    { key: "video5", path: image5, link: "https://www.youtube.com/watch?v=KSn9kYluxOw", author: "I Am BYP", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "BYP" },
    { key: "video6", path: image6, link: "https://www.youtube.com/watch?v=V-RCCp7Fljs", author: "Kill Moe", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { key: "video7", path: image7, link: "https://vimeo.com/321125295", author: "Jealous", title: "OFLO", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "Jealous" },
    { key: "video8", path: image8, link: " https://vimeo.com/284630098", author: "Everybody Drinks Wine", title: "Nwar Club", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { key: "video9", path: image9, link: "https://vimeo.com/221483710", author: "Obioma", title: "Spring Summer", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { key: "video10", path: image10, link: "https://www.youtube.com/watch?v=HhxzCrkPwE8&t=4s", author: "Why We Make Whiskey", title: "Tabacco Barn Distillery", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
  ]
}


// Hook =====
const useShowAnimation = (reversible = false, showLine = 568) => {
  const showRef = useRef(null);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {

    const onScroll = (e) => {

      const scrollPosition = e.target.scrollTop + window.innerHeight;

      if (scrollPosition / showLine > 0) {
        setTimeout(() => {
          let selector = ".video" + Math.floor(scrollPosition / showLine) + " .revealUp span>span";
          let elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            element.classList.remove("hidden-animation");
            element.classList.add("show-animation");
          });
        }, 200);
        setTimeout(() => {
          let selector_b = ".video" + Math.floor(((scrollPosition - 40 )/ showLine) + 1) + " .revealUp span>span";
          let elements_b = document.querySelectorAll(selector_b);
          elements_b.forEach((element) => {
            element.classList.remove("show-animation");
            element.classList.add("hidden-animation");
          });
          let selector_d = ".video" + Math.floor((scrollPosition / showLine) - 1) + " .revealUp span>span";
          let elements_d = document.querySelectorAll(selector_d);
          elements_d.forEach((element) => {
            element.classList.remove("show-animation");
            element.classList.add("hidden-animation");
          });
        }, 200);
      }
      // let ele = ".video" + Math.floor(scrollPosition / showLine) + " .revealUp span>span";
      //   document.querySelector(ele).classList.add("show-animation");
    };

    document.getElementById('video-section').addEventListener("scroll", onScroll);

    return () => document.getElementById('video-section').removeEventListener("scroll", onScroll);
  }, []);

  return [show, showRef];
};

function Videopage() {

  const [showChild, childRef] = useShowAnimation(true);

  return (
    <div className="d-grid videopage">
      <h3 className="text-center py-3 v-small-title">michael bloom</h3>
      {
        images.video.map((item) => (
          <div ref={childRef} className={"ps-3 d-flex align-items-center title-video-md " + item.key} key={item.path} id={item.id}>
            <div className={item.first ? "cursor-pointer section-video pe-0 w-100 py-4" : "cursor-pointer section-video w-100 py-4"} >
              <h1 className="revealUp large-title"
                style={{ left: `10%`, bottom: `15%`, zIndex: 1 }}>
                <span>
                  <span className="hidden-animation">{item.author}</span>
                </span>
                <span>
                  <span className="hidden-animation">{item.title}</span>
                </span>
              </h1>

              <div
                style={{ zIndex: 1 }}
                className="position-absolute small-credits revealUp">
                <span><span className="hidden-animation">{item.s_author}</span></span>

                <span><span className="hidden-animation">{item.s_contents}</span></span>
              </div>
              <div>
                <a className="" href={item.link}>
                  <Image className="position-absolute start-50 translate-middle v-playbtn"
                    src={playIcon} alt="play icon..." />
                </a>
              </div>
              <Image src={item.path} className="bg-video rounded-3 p-3" style={{ width: `97%` }} />
            </div>
          </div>
        ))
      }
      <div style={{ height: 400 }}>

      </div>
    </div>
  );
}

export default Videopage;
