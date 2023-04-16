import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";

import Homepage from '../pages/homepage';
import Contactpage from '../pages/Contactpage';
import Photopage from '../pages/photopage';
import Videopage from '../pages/Videopage';
import Projectpage from '../pages/Projectspage';


const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Contact",
    element: <Contactpage />,
  },
  {
    path: "/Photos",
    element: <Photopage />,
  },
  {
    path: "/videos",
    element: <Videopage />,
  },
  {
    path: "/projects",
    element: <Projectpage />,
  },
]);

export default AllRoute;
