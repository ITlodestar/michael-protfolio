import React, { useEffect } from "react";
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

import exitbutton from "../assets/Icons/ExitButton.png";

const images = {
  video: [
    { path: image1, link: "https://www.youtube.com/watch?v=YZ46fS1OxPU", author: "J. Ember", title: "Bargain Flights", s_author: "Dir. Jackson Tisi", s_contents: "EP. Patrick Donovan", id: "2" },
    { path: image2, link: "https://vimeo.com/337688483", author: "Prada", title: "Spring Summer", s_author: "Dir. Matthew Dillon Cohen", s_contents: "EP. Patrick Donovan", id: "1" },
    { path: image3, link: "https://www.youtube.com/watch?v=OXe66eyFdoc", author: "Ciscero", title: "Function", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image4, link: "https://www.youtube.com/watch?v=zu1wq8IjAIc", author: "Fight Camp", title: "", s_author: "Dir. Tobias Nathan", s_contents: "EP. Emi Stewart", id: "3" },
    { path: image5, link: "https://www.youtube.com/watch?v=KSn9kYluxOw", author: "I Am BYP", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "4" },
    { path: image6, link: "https://www.youtube.com/watch?v=V-RCCp7Fljs", author: "Kill Moe", title: "Def Jam Records", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image7, link: "https://vimeo.com/321125295", author: "Jealous", title: "OFLO", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom", id: "5" },
    { path: image8, link: " https://vimeo.com/284630098", author: "Everybody Drinks Wine", title: "Nwar Club", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image9, link: "https://vimeo.com/221483710", author: "Obioma", title: "Spring Summer", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
    { path: image10, link: "https://www.youtube.com/watch?v=HhxzCrkPwE8&t=4s", author: "Why We Make Whiskey", title: "Tabacco Barn Distillery", s_author: "Prod. Omada Cinema", s_contents: "EP. Michael Bloom" },
  ]
}
function Videopage() {


  return (
    <div className="d-grid videopage">
      <h3 className="text-center py-3 v-small-title">michael bloom</h3>
      {
        images.video.map((item) => (
          <div className="ps-3 d-flex align-items-center title-video-md"  key={item.path} id={item.id}>
            <div className={item.first ? " cursor-pointer section-video pe-0 w-100 py-4  " : "cursor-pointer section-video w-100 py-4"}>
              <div className="revealUp large-title"
                style={{ left: `10%`, bottom: `15%`, zIndex: 1 }}>
                <h1
                  className=""
                >{item.author} </h1>
                <h1 className=" "> {item.title}</h1>
              </div>

              <div
                style={{ zIndex: 1 }}
                className="position-absolute small-credits revealUp">
                <h4 className="">{item.s_author}
                </h4>
                <h4 className="">{item.s_contents}</h4>
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
      <div style={{ height: 400}}>

      </div>
    </div>
  );
}

export default Videopage;
