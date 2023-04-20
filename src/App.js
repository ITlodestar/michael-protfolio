import { useState } from 'react';
import AllRoute from './router';
import { Image } from 'react-bootstrap';

import Header from "./components/Header";

import ballonimg from "../src/assets/ballonimg.jpg";
import {
  RouterProvider,
} from "react-router-dom";


function App() {
 
  const [ballon, setBallon] = useState(0);

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
        <div style={{paddingTop: 160}}></div>
        <RouterProvider router={AllRoute} />
      </div>
      {/* {
        ballon === 1 ?
          <div
            style={{ zIndex: -1 }}
            className='position-absolute start-50-100  translate-middle'>
            <video
              autoPlay
              muted
              loop
              id='bg-video'
              className=''>
              <source src="/Balloon.mp4" type="video/mp4" />
            </video>
          </div> :
          <Image
            id='ballon'
            src={ballonimg}
            style={{ width: 160, marginLeft: -60, marginTop: 13 }}
            className="position-absolute z-index-1 start-50-100 "
            onClick={() => PlayBallon()} />
      } */}
      <footer></footer>
    </div >
  );
}

export default App;
