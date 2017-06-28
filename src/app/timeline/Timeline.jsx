import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header.jsx';
import Comment from './Comment.jsx';
import Feed from './Feed.jsx';


const Timeline = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <Header />
        <h1> Your in the Timeline </h1>
        <Comment />
        <Feed />
      </div>
    </MuiThemeProvider>
  </div>
);

export default Timeline;