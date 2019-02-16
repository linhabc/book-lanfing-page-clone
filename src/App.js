import React, { Component } from 'react';
import './App.css';

// import Navbar from './component/navBar';
import Overlay from './component/Overlay';
import Feature from './component/Feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Overlay />
        <Feature />
      </div>
    );
  }
}

export default App;
