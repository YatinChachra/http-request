import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetPost from './Component/GetPost'
import PostRequest from './Component/PostRequest'

class App extends Component {
  render() {
    return (
      <div className="App">

        { /* <GetPost></GetPost>*/}
        <PostRequest></PostRequest>

      </div>
    );
  }
}

export default App;
