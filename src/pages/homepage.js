import React from "react";
import { useState } from "react";

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

const homedata = {
  producer: [
    { title: "Ciscero", contents: "function", link: "https://www.youtube.com/watch?v=OXe66eyFdoc" },
    { title: "Def Jam", contents: "i am beau young prince", link: "https://www.youtube.com/watch?v=V-RCCp7Fljs" },
    { title: "Lady Oflo", contents: "jealous", link: "https://vimeo.com/321125295" },
    { title: "Beau Young Prince", contents: "kill moe", link: "https://www.youtube.com/watch?v=KSn9kYluxOw" },
    { title: "Obioma", contents: "spring ‘17", link: "https://vimeo.com/221483710" },
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
    <div key={item.title} className="d-flex row  fkex-md-flex align-items-center justify-content-center">
      <div className="col-6 text-end">
        <a href={item.link} className="text-decoration-none video-title-left text-light ">
          <h5 className="fw-bold d-flex justify-content-end   m-0 p-0 align-items-center">{item.title}</h5>
        </a>
      </div>
      <div className="col-6 text-start">
        <p className="text-uppercase d-flex m-0 p-0 align-items-center fw-light ps-2"> {item.contents} </p>
      </div>
    </div>
  ))
);

const Imagesection = ({ Items, setPreview, preview }) => {
  console.log(preview);
  return Items.map((item) => (
    <div className={item.id % 2 == 0 ? " d-flex justify-content-start justify-content-md-center" : "d-flex justify-content-end justify-content-md-center"} key={item.id}>
      <a href="/videos " className="w-75 m-2" data-aos-duration="2000" data-aos={item.id % 2 == 0 ? "fade-right" : "fade-left"}>
        {item.id === preview ?
          <video
            autoPlay
            muted
            loop
            className='w-100'>
            <source src={item.videopath} type="video/mp4" />
          </video> :
          <img
            src={item.imagepath}
            alt=""
            className="w-100"
            onMouseOver={() => setPreview(item.id)}
            onMouseLeave={() => setPreview(0)}
            />
        }
      </a>
    </div>
  ))
};


function Homepage() {
  const [preview, setPreview] = useState(0);
  return (
    <div className="d-md-flex align-items-center justify-content-center">
      <div className="center-col">
        <div className="d-md-block w-100 text-center title">
          <h3 className="py-4">Producer</h3>
          <Titlesection Items={homedata.producer} />
          <h3 className="py-4">Assistant</h3>
          <Titlesection Items={homedata.assistant} />
        </div>

      </div>
      <div className="images d-flex flex-column order-md-first ">
        <Imagesection Items={homedata.images_l} setPreview={setPreview} preview={preview} />
      </div>
      <div className="images d-flex flex-column">
        <Imagesection Items={homedata.images_r} setPreview={setPreview} preview={preview} />
      </div>
    </div>
  );
}

export default Homepage;
