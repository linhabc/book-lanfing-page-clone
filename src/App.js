import React, { Component } from 'react';
import './App.css';

import Navbar from './component/navBar';
import Overlay from './component/Overlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Overlay />
      </div>
    );
  }
}

export default App;
