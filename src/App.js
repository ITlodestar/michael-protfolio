import React from 'react';
import Header from "./components/Header";
import AllRoute from './router';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className='container bg-animation ' >
      <video autoPlay muted loop id='bg-video video-background'>
        <source src="./assets/Balloon.mp4" type="video/mp4" />
      </video>
      <div className='caption'>
        <Header />
        <RouterProvider router={AllRoute} />
      </div>

    </div>
  );
}

export default App;
