import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './components/Index';

const App = () => (
  <BrowserRouter>
    <div className="container main">
      <Route exact path="/" component={Index}/>
    </div>
  </BrowserRouter>
);

export default App;
