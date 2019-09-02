import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import Hero from './components/Hero';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
    return (
      <>
      <Hero/>
<h1>hello from app.js</h1>
<SearchBar/>
      </>
    );
  }
}

export default App;