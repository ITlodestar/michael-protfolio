import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import AllRoute from './router';
import { Image } from 'react-bootstrap';

import Header from "./components/Header";

import ballonimg from "../src/assets/ballonimg.png";
import {
  RouterProvider,
} from "react-router-dom";


function App() {

  const [ballon, setBallon] = useState(0);
  const [imgOfPhotoPage, setImgOfPhotoPage] = useState(1);
  useEffect(() => {
    if (window.location.pathname == '/') {
      document.body.classList.add("overflow-md-hidden");
    }
    if (window.location.pathname == '/photos') {
      setImgOfPhotoPage(0);
    } else {
      setImgOfPhotoPage(1);
    }
  }, [])

  function PlayBallon() {
    setBallon(1);
    setTimeout(() => {
      setBallon(0);
    }, 4000);
  }


  return (
    <div className='px-5 bg-animation position-relative' >
      <div className="position-relative">
        <Header />
        <div style={ window.innerWidth > 768 ? { paddingTop: 150 }:{ paddingTop: 120 }}></div>
        <RouterProvider router={AllRoute} />
      </div>
      {
        ballon === 1 ? (
          <div
            style={{ zIndex: -1 }}
            className='position-fixed start-50-100 d-flex align-items-end footer'>
            <video
              autoPlay
              muted
              loop
              className='position-fixed'
              id='bg-video'>
              <source src="/Balloon.mp4" type="video/mp4" />
            </video>
            { window.location.pathname === '/photos'? <></>: <h2 className='producernyc'>producer<br></br>nyc</h2> }
          </div>) : (

          <div
            className="position-fixed start-50-100 d-flex align-items-end footer"
            style={{ zIndex: 99 }}>
            <Image
              id='ballon'
              src={ballonimg}
              style={{ paddingBottom: 50 }}
              onClick={() => PlayBallon()}
              className={window.location.pathname === '/photos' ? "d-none" : "d-inline"} />
            { window.location.pathname === '/photos'? <></>: <h2 className='producernyc'>producer<br></br>nyc</h2> }
          </div>
        )
      }
      <footer className={window.location.href === '/' ? "d-inline" : "d-none"}></footer>
    </div >
  );
}

export default App;
