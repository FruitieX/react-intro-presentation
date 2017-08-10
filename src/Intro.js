import React, { Component } from 'react';

import { PrismCode } from 'react-prism';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import logo from './assets/redux-logo.png';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Intro', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  code: {
    padding: 16,
    flex: 1,
  },
}));

class Intro extends Component {
  render() {
    return (
      <div>
        <Step id="welcome" x={1100} y={800} z={2000}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="React logo" />
              <div>and its usage with React / React Native</div>
              <div>Find this presentation at:</div>
              <h6>https://haaga-helia-redux.surge.sh</h6>
            </div>
          </center>
        </Step>
        <Step id="agenda" x={100} y={100} z={200}>
          <h3>Agenda</h3>

          <Card>
            <CardContent>
              <h4>Lecture 1</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Problems with React component state</li>
                <li>Store, Reducers, Actions, Action creators</li>
                <li>Debugging experience</li>
                <li>Coding excercise</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
