import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home';
import './globals.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

