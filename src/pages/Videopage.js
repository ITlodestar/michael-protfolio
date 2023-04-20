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
function Videopage({ SetDisplayvideo }) {
  return (
    <div className="d-grid videopage">
      <h3 className="text-center py-3">michael bloom</h3>
      {
        images.video.map((item) => (
          <div data-aos="fade-right" data-aos-duration="5000" className="d-flex align-items-center title-video-md" key={item.path} >
            <div className={item.first ? "cursor-pointer section-video me-0 w-100 my-4 position-relative" : "cursor-pointer section-video me-5 w-100 my-4 position-relative "}>
              <h1
                className="ps-3"
                data-aos-duration="2000"
                data-aos="flip-up"
                data-aos-easing="ease-in-out"
                style={{ left: `10%`, bottom: `15%`, zIndex: 1 }}>{item.author} <br /> {item.title} </h1>
              <h4
                style={{ zIndex: 1 }}
                className="position-absolute "
                data-aos-duration="2000"
                data-aos="flip-down"
                data-aos-easing="ease-in-out"
              >{item.s_author} <br />{item.s_contents}</h4>
              <div >
                <Image className="position-absolute  start-50 translate-middle v-playbtn"
                   src={playIcon} alt="play icon..." />
              </div>
              <Image src={item.path} className="bg-video rounded-3 p-3" style={{ width: `97%` }} />
            </div>
          </div>
        ))
      }
     
    </div>
  );
}

export default Videopage;
