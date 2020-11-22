import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// pages
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;