import React from "react";
import img1 from '../assets/img/Landing Page/Prada Spring_Summer _Thumbnail.jpg';
import img2 from '../assets/img/Landing Page/j ember - Bargain Flights_Thumbnail.jpg';
import img3 from '../assets/img/Landing Page/This is FightCamp_Thumbnail.jpg';
import img4 from '../assets/img/Landing Page/BYP_I AM BYP_Thumbnail.jpg';
import img5 from '../assets/img/Landing Page/Jealous Thumbnail.jpg';
import '../assets/css/home.css';

const homedata = {
  producer: [
    { title: "Ciscero", contents: "function" },
    { title: "Def Jam", contents: "i am beau young prince" },
    { title: "Lady Oflo", contents: "jealous" },
    { title: "Beau Young Prince", contents: "kill moe" },
    { title: "Obioma", contents: "spring ‘17" },
    { title: "Nwar Club", contents: "everybody drinks wine" },
    { title: "TBD Distillery", contents: "why we make whiskey" },
  ],
  assistant: [
    { title: "Fight Camp", contents: "this is fight camp" },
    { title: "Prada", contents: "spring / summer ‘19" },
    { title: "J. ember", contents: "bargain flights" },
  ],
  images_l: [
    { path: img1, id: 1 },
    { path: img2, id: 2 },
    { path: img3, id: 3 },
  ],
  images_r: [
    { path: img4, id: 4 },
    { path: img5, id: 5 },
  ]
}

const Titlesection = ({ Items }) => (
  Items.map((item) => (
    <div key={item.title} className="d-flex row  fkex-md-flex align-items-center justify-content-center">
      <div className="col-6 text-end">
        <h5 className="fw-bold d-flex justify-content-end m-0 p-0 align-items-center">{item.title}</h5>
      </div>
      <div className="col-6 text-start">
        <p className="text-uppercase d-flex m-0 p-0 align-items-center fw-light ps-2"> {item.contents} </p>
      </div>
    </div>
  ))
);

const Imagesection = ({ Items, pos }) => (
  Items.map((item) => (
    <div className={item.id % 2 == 0 ? " d-flex justify-content-start justify-content-md-center" : "d-flex justify-content-end justify-content-md-center"} key={item.id}>
      <a href="/videos">
        <img src={item.path} alt="" className="w-75 m-2" data-aos-duration="2000" data-aos={item.id % 2 == 0 ? "fade-right" : "fade-left"} />
      </a>
    </div>
  ))
);


function Homepage() {
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
        <Imagesection Items={homedata.images_l} pos="left" />
      </div>
      <div className="images d-flex flex-column">
        <Imagesection Items={homedata.images_r} pos="right" />
      </div>
    </div>
  );
}

export default Homepage;
