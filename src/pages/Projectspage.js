import React from "react";
import { useState } from "react";


import { Button, Image } from "react-bootstrap";

import projectimage from "../assets/img/projects/Jamaican Dominoes Thumbnail.png";
import pdfimage2 from "../assets/img/projects/Pdf Thumbnail.png";
import playicon from "../assets/Icons/Play.png";
import previewicon from "../assets/Icons/pdf preview.png";
import gallerybtn from "../assets/Icons/Gallery.png";
import stackbtn from "../assets/Icons/Stackcopy.png";
import Carouselphoto from "../components/Carouselphoto";

const image = {
  source: [
    { id: 1, type: "play", path: projectimage },
    { id: 2, type: "preview", path: pdfimage2 },
    { id: 3, type: "play", path: projectimage },
    { id: 4, type: "preview", path: pdfimage2 },
    { id: 5, type: "play", path: projectimage },
    { id: 6, type: "preview", path: pdfimage2 },
  ]
}

const Projectpage = () => {
  const [changeBtn, setChangeBtn] = useState(0);
  return (
    <div className="position-relative p-5">
      <div className="position-absolute  top-0  translate-middle" style={{ right: `20%` }}>
        <Image
          className="cursor-pointer"
          src={changeBtn == 0 ? stackbtn : gallerybtn} width={50}
          onClick={() => setChangeBtn(changeBtn == 0 ? 1 : 0)} />
      </div>
      <div

        className={changeBtn == 0 ? "row m-auto " : "d-none "}
        style={{ maxWidth: 680 }}>
        {
          image.source.map((item) => (
            <div
              className="hover-display col-12 col-md-4 p-3 position-relative"
              key={item.id}>
              <Image
                src={item.path} alt="..." className="w-100 " />

              <a
                className="position-absolute top-50 start-50 translate-middle p-3"
                href={item.type === "play" ? "" : "/Resume/Untitled Raouls Project.pdf"}
                target={item.type === "play" ? "" : "_blank"}
                style={item.type === "play" ? { width: 100, height: 100 } : { width: `100%`, height: `100%` }}
              >
                <Image
                  className={item.type === "play" ? "w-100" : "pdf-display w-100"}
                  src={item.type === "play" ? playicon : previewicon} alt="button"
                />
              </a>

            </div>
          ))
        }
      </div>
      <div
        className={changeBtn == 0 ? "d-none" : "m-auto"}
        style={{ maxWidth: 380 }}>
        <Carouselphoto images={image.source} playicon={playicon} previewicon={previewicon} />
      </div>
    </div>
  )
}

export default Projectpage;