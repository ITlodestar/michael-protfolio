import React from "react";
import { Image } from "react-bootstrap";
import { VideoHTMLAttributes } from "react";

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

import exitbutton from "../assets/Icons/ExitButton.png";

const images = {
  video: [
    { path: image1, author: "J. Ember", title: "Bargain Flights", s_author: "Dir. Jackson Tisi", s_contents: "EP. Patrick Donovan" },
    { path: image2, author: "Prada", title: "Spring Summer", s_author: "Dir. Matthew Dillon Cohen", s_contents: "EP. Patrick Donovan" },
    { path: image3, author: "Ciscero", title: "Function", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image4, author: "Fight Camp", title: "", s_author: "Dir. Tobias Nathan", s_contents: "EP. Emi Stewart" },
    { path: image5, author: "I Am BYP", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image6, author: "Kill Moe", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image7, author: "Jealous", title: "OFLO", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image8, author: "Everybody Drinks Wine", title: "Nwar Club", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image9, author: "Obioma", title: "Spring Summer", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image10, author: "Why We Make Whiskey", title: "Tabacco Barn Distillery", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
  ]
}
function Videopage() {
  return (
    <div className="d-grid videopage">
      {
        images.video.map((item) => (
          <div data-aos="fade-right" data-aos-duration="5000" className="d-flex align-items-center title-video-md" key={item.path} >
            <div className={item.first ? "me-0 w-100 my-4 position-relative" : "me-5 w-100 my-4 position-relative"}>
              <h1
                data-aos-duration="2000"
                data-aos="flip-up" 
                data-aos-easing="ease-in-out"
                style={{ left: `10%`, bottom: `15%` }}>{item.author} <br /> {item.title} </h1>
              <h4
                className="position-absolute"
                data-aos-duration="2000"
                data-aos="flip-down" 
                data-aos-easing="ease-in-out"
              >{item.s_author} <br />{item.s_contents}</h4>
              <a href="#">
                <Image className="position-absolute top-50 start-50 translate-middle"
                  style={{ width: 55, height: 50 }} src={playIcon} alt="play icon..." />
              </a>
              <Image src={item.path} className="rounded-3" style={{width: `97%`}} />
            </div>
          </div>
        ))
      }
      <a href="/" id="exit-video" className="d-inline position-fixed " >
        <Image src={exitbutton} style={{ width: 50, height: 50 }} />
      </a>
    </div>
  );
}

export default Videopage;
