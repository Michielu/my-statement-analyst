
import React from 'react';

import Home from '../components/Home/index';
import AllTrans from '../components/AllTrans/index';
import AddTrans from '../components/AddTrans/index';
import Filter from '../components/Filter/index';


const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    glyphicon: "home",
    title: true,
    main: () => <Home />
  }, {
    path: "/t/a",
    exact: true,
    text: "All Transactions",
    glyphicon: "glyphicon-remove-sign",
    title: true,
    main: () => <AllTrans />
  }, {
    path: "/a",
    exact: true,
    text: "Add Transactions",
    glyphicon: "glyphicon-add-sign",
    title: true,
    main: () => <AddTrans />
  }, {
    path: "/f",
    exact: true,
    text: "Filter Transaction",
    glyphicon: "glyphicon-add-sign",
    title: true,
    main: () => <Filter />
  }

];

export default routes;