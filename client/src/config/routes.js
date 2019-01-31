
import React from 'react';

import Home from '../components/Home';


const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    glyphicon: "glyphicon-remove-sign",
    title: true,
    main: () => <Home></Home>
  }, {
    path: "/t/a",
    exact: true,
    text: "All Transactions",
    glyphicon: "glyphicon-remove-sign",
    title: true,
    main: () => <div>All Trans</div>
  }

];

export default routes;