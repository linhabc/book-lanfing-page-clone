import React, { Component } from 'react';
import './App.css';

import Navbar from './component/navBar';
import Overlay from './component/Overlay';
import Feature from './component/Feature';
import Counter from './component/Counter';
import VideoReview from './component/VideoReview';
import Review from './component/Review';
import SubForm from './component/SubForm';
import Price from './component/Price';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Overlay />
        <Feature />
        <Counter />
        <VideoReview />
        <Review />
        <SubForm />
        <Price />
      </div>
    );
  }
}

export default App;
