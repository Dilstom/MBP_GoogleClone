import React, { Component } from 'react';
import BottomNav from '../BottomNav/BottomNav';
import MainContent from '../MainContent/MainContent';
import TopNav from '../TopNav/TopNav';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <TopNav />
      </div>
        <div className="main">
          <MainContent />
      </div>
        <div className="bottom">
          <BottomNav />
      </div>

      </div>
    );
  }
}

export default App;
