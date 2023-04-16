import React from 'react';
import { useEffect } from 'react';
import Header from "./components/Header";
import AllRoute from './router';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  useEffect(() => {
    if (window.location.pathname == '/') {
      document.body.classList.add('overflow-hidden')
    }
  }, [])

  return (
    <div className='container bg-animation position-relative' >
      <div className='caption'>
        <Header />
        <RouterProvider router={AllRoute} />
      </div>
      <div
        style={{ zIndex: -1 }}
        className='position-absolute top-0 start-100 translate-middle'>
        <video
          autoPlay
          muted
          loop
          id='bg-video'
          
          className=''>
          <source src="/Balloon.mp4" type="video/mp4" />
        </video>
      </div>

      <footer style={{ height: 80 }}></footer>
    </div>
  );
}

export default App;
