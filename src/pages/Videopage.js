import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Breadcrumb, Image } from "react-bootstrap";

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
import exitIcon from "../assets/Icons/ExitButton-1.png";

const images = {
  video: [
    { key: "video1", path: image1, link: "https://www.youtube.com/watch?v=YZ46fS1OxPU", author: "J. Ember", title: "Bargain Flights", s_author: "Dir. Jackson Tisi", s_contents: "EP. Patrick Donovan", id: "jember" },
    { key: "video2", path: image2, link: "https://player.vimeo.com/337688483", author: "Prada", title: "Spring Summer", s_author: "Dir. Matthew Dillon Cohen", s_contents: "EP. Patrick Donovan", id: "prada" },
    { key: "video3", path: image3, link: "https://www.youtube.com/watch?v=OXe66eyFdoc", author: "Ciscero", title: "Function", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "ciscero" },
    { key: "video4", path: image4, link: "https://www.youtube.com/watch?v=zu1wq8IjAIc", author: "Fight Camp", title: "", s_author: "Dir. Tobias Nathan", s_contents: "EP. Emi Stewart", id: "fightcamp" },
    { key: "video5", path: image5, link: "https://www.youtube.com/watch?v=KSn9kYluxOw", author: "I Am BYP", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "BYP" },
    { key: "video6", path: image6, link: "https://www.youtube.com/watch?v=V-RCCp7Fljs", author: "Kill Moe", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "killMoe" },
    { key: "video7", path: image7, link: "https://player.vimeo.com/321125295", author: "Jealous", title: "OFLO", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "Jealous" },
    { key: "video8", path: image8, link: "https://player.vimeo.com/284630098", author: "Everybody Drinks Wine", title: "Nwar Club", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "everybody" },
    { key: "video9", path: image9, link: "https://player.vimeo.com/221483710", author: "Obioma", title: "Spring Summer", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "Obioma" },
    { key: "video10", path: image10, link: "https://www.youtube.com/watch?v=HhxzCrkPwE8&t=4s", author: "Why We Make Whiskey", title: "Tabacco Barn Distillery", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "Whiskey" },
  ]
}

let everyheightvideos = [];

// Hook ===== animations=--====
const useShowAnimation = (reversible = false, showLine = 568) => {
  const showRef = useRef(null);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {

    const onScroll = (e) => {

      const scrollPosition = e.target.scrollTop + window.innerHeight + 250;
      const removescroll = scrollPosition - 40;
      let showindex = 0, hiddenindex = 0;

      // console.log(everyheightvideos);

      for (let index = 0; index < everyheightvideos.length; index++) {
        if (everyheightvideos[index] < removescroll) {
          hiddenindex = index + 1;
        }
        if (everyheightvideos[index] < scrollPosition) {
          showindex = index + 1;
        } else {
          break;
        }
      }
      // console.log("showindex", showindex);
      if (showindex > 0) {
        setTimeout(() => {
          let selector = ".video" + Math.floor(showindex) + " .revealUp span>span";
          let elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            element.classList.remove("hidden-animation");
            element.classList.add("show-animation");
          });
        }, 200);

        setTimeout(() => {

          let selector_b = ".video" + Math.floor(hiddenindex + 1) + " .revealUp span>span";
          let elements_b = document.querySelectorAll(selector_b);
          elements_b.forEach((element) => {
            element.classList.remove("show-animation");
            element.classList.add("hidden-animation");
          });

          let selector_d = ".video" + Math.floor((showindex) - 1) + " .revealUp span>span";
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
  everyheightvideos = [];
  const [showChild, childRef] = useShowAnimation(true);
  const divRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [playVideo, setPlayVideo] = useState('none');
  const [videoHeight, setVideoHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const getheights = () => {
    const { current: divs } = divRefs;
    const container = document.getElementById('container-v');
    const containerTop = container.getBoundingClientRect().top;
    divs.forEach((div) => {
      const { top, bottom } = div.getBoundingClientRect();
      everyheightvideos.push(bottom - containerTop);
      // console.log(`Div ${div.getAttribute('id')} - Top: ${bottom}, OffsetTop: ${offsetTop}`);
    });
  }
  useEffect(() => {
    getheights();
  }, [windowWidth]);

  useEffect(() => {
    getheights();
  });
  // Update the state variable whenever the window width changes
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const startPlayVideo = (e) => {
    let videoID = e.currentTarget.dataset.video;
    setPlayVideo(videoID);
    setVideoHeight(document.getElementById(videoID).height);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="d-grid videopage" id="container-v">
      <h3 className="text-center py-3 v-small-title">michael bloom</h3>
      {
        images.video.map((item, index) => (
          <div ref={(el) => divRefs.current[index] = el} className={"ps-3 d-flex align-items-center title-video-md " + item.key} key={item.path}>
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
              {
                item.id === playVideo ?
                  <div className="video-container">
                    <div>
                      <a className="" onClick={(e) => setPlayVideo('none')} >
                        <Image id="exit-icon"
                          className={`position-absolute start-50 translate-middle v-playbtn ${isHovering ? '' : "exit-icon"}`}
                          onMouseEnter={() => setIsHovering(true)}
                          src={exitIcon} alt="exit icon..." />
                      </a>
                    </div>
                    <iframe
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="image-video rounded-3 p-3"
                      style={{ height: `${videoHeight}px` }} src={item.link + '?autoplay=1&mute=1'}>
                    </iframe>
                    {/* <video
                      autoPlay
                      muted
                      controls
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="image-video rounded-3 p-3"
                      style={{ height: `${videoHeight}px` }}>
                      <source src={item.link} type="video/mp4" />
                    </video> */}
                  </div>
                  :
                  <>
                    <div>
                      <a className="" onClick={(e) => startPlayVideo(e)} data-video={item.id} >
                        <Image className="position-absolute start-50 translate-middle v-playbtn"
                          src={playIcon} alt="play icon..." />
                      </a>
                    </div>
                    <Image src={item.path} id={item.id} className="bg-video rounded-3 p-3" style={{ width: `97%` }} />
                  </>
              }
              {/* <div>
                <a className="" href={item.link} data-video={item.id} target="_blank">
                  <Image className="position-absolute start-50 translate-middle v-playbtn"
                    src={playIcon} alt="play icon..." />
                </a>
              </div>
              <Image src={item.path} id={item.id} className="bg-video rounded-3 p-3" style={{ width: `97%` }} /> */}
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
