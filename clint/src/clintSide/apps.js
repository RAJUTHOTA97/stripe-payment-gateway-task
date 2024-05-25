import React from 'react';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Main from './main';
import Success from './Success';

function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Main} />
        <Route path="/success" component={Success} />
      </Routes>
    </BrowserRouter>
  );
}

export default Apps;
