
import React from 'react';

import Home from '../components/Home';
import AllTrans from '../components/AllTrans';
import AddTrans from '../components/AddTrans';


const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    glyphicon: "glyphicon-remove-sign",
    title: true,
    main: () => <Home/>
  }, {
    path: "/t/a",
    exact: true,
    text: "All Transactions",
    glyphicon: "glyphicon-remove-sign",
    title: true,
    main: () => <AllTrans/>
  }, {
    path: "/a",
    exact: true,
    text: "Add Transactions",
    glyphicon: "glyphicon-add-sign",
    title: true,
    main: () => <AddTrans/>
  }

];

export default routes;