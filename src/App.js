import { useEffect, useState } from 'react';
import AllRoute from './router';
import { Image } from 'react-bootstrap';

import Header from "./components/Header";

import ballonimg from "../src/assets/ballonimg.png";
import {
  RouterProvider,
} from "react-router-dom";


function App() {

  const [ballon, setBallon] = useState(0);
  useEffect(() => {
    if (window.location.pathname == '/') {
      document.body.style.overflow = "hidden";
    }
  }, [])

  function PlayBallon() {
    setBallon(1);
    setTimeout(() => {
      setBallon(0);
    }, 4000);
  }
  return (
    <div className='container bg-animation position-relative' >
      <div className='caption position-relative'>
        <Header />
        <div style={{ paddingTop: 160 }}></div>
        <RouterProvider router={AllRoute} />
      </div>
      {
        ballon === 1 ?
          <div
            style={{ zIndex: -1 }}
            className='position-absolute start-50-100  translate-middle'>
            <video
              autoPlay
              muted
              loop
              id='bg-video'>
              <source src="/Balloon.mp4" type="video/mp4" />
            </video>
          </div> :
          <div
            className="position-absolute  start-50-100 image-btn d-flex align-items-end"
            style={{ zIndex: 99 }}>
            <Image
              id='ballon'
              src={ballonimg}
              style={{ paddingBottom: 24 }}
              onClick={() => PlayBallon()} />
            <h2 className='producernyc'>producer nyc</h2>
          </div>
      }
      <footer></footer>
    </div >
  );
}

export default App;
