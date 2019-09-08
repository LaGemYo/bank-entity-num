import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchBar from './components/SearchBar';
import Hero from './components/Hero';


import { Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor() {
    super();
    
    this.state = {
      list: [],
    }
    
  }
    render() {
      const {list} = this.state
    return (
      <>
      <Hero/>
      <SearchBar/>
      </>
    );
  }
}

export default App;