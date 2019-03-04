
import React from 'react';

import Home from '../components/Home/index';
import AllTrans from '../components/AllTrans/index';
import AddTrans from '../components/AddTrans/index';
import TransRange from '../components/TransRange/index';


const routes = [
  {
    path: "/",
    exact: true,
    text: "Home",
    glyphicon: "glyphicon-remove-sign",
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
    path: "/range",
    exact: true,
    text: "Transaction Range",
    glyphicon: "glyphicon-add-sign",
    title: true,
    main: () => <TransRange />
  }

];

export default routes;