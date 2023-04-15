import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";

import Homepage from '../pages/homepage';

const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default AllRoute;
