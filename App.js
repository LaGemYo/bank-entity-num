import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchBar from './components/SearchBar';
import Hero from './components/Hero';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
    return (
      <>
      <Hero/>
      <SearchBar/>
      </>
    );
  }
}

export default App;