import React, { Component } from 'react';

import { PrismCode } from 'react-prism';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import ReactLogo from './assets/react-logo.png';
import ReactNativeLogo from './assets/logo-react-native.svg';
import ReduxLogo from './assets/redux-logo.png';
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
        <Step id="welcome" x={2000} y={-800} z={2000} rotate={-3} rotateX={20}>
          <center>
            <div className="App-header">
              <h4>Welcome to a basics course on:</h4>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: 64,
                }}
              >
                <div style={{ flex: 1 }}>
                  <img height={100} src={ReactNativeLogo} alt="React logo" />
                </div>
              </div>
              <h6>We will also look at:</h6>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ flex: 1 }}>
                  <img height={60} src={ReactLogo} alt="React logo" />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    style={{ margin: -25 }}
                    height={100}
                    src={ReduxLogo}
                    alt="Redux logo"
                  />
                </div>
              </div>
            </div>
            <Card>
              <CardContent>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: 20 }}>
                    <b>Rasmus Eskola (rasmus.eskola@gmail.com)</b>
                  </div>
                  <div style={{ fontSize: 20 }}>
                    <b>16:45 - 20:45</b>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: 20, color: '#222' }}>
                    Room: 1007 / Pasila
                  </div>
                  <div style={{ fontSize: 20, color: '#222' }}>
                    14.8.2017 - 18.8.2017
                  </div>
                </div>
                <div style={{ fontSize: 24, paddingTop: 16, color: '#222' }}>
                  Find slides and links at:{' '}
                  <div style={{ color: '#37d' }}>
                    <a href="https://haaga-helia.surge.sh">
                      https://haaga-helia.surge.sh
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </center>
        </Step>
        <Step id="agenda-react" x={1100} y={700} z={1000}>
          <Card>
            <CardContent>
              <div style={{ textAlign: 'center' }} height={100}>
                <img height={60} src={ReactLogo} alt="React logo" />
              </div>
              <h4>Monday (Lecture 1)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Course intro (now)</li>
                <li>Modern JavaScript - ES6</li>
                <li>React basics through examples</li>
                <li>Background, comparison to other frameworks</li>
                <li>JSX syntax</li>
                <li>
                  <b>Exercise: </b>Environment setup
                </li>
                <li>
                  <b>Exercise: </b>Implementing a counter
                </li>
              </ul>
              <h4>Tuesday (Lecture 2)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>React Components:</li>
                <ul style={{ fontSize: 24, marginTop: 0 }}>
                  <li>Component props</li>
                  <li>Component state</li>
                  <li>Lifecycle methods</li>
                </ul>
                <li>
                  <b>Exercise: </b>Implementing multiple counters using React
                  components
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="agenda-react-native" x={2000} y={670} z={1000} rotate={-3}>
          <Card>
            <CardContent>
              <div style={{ textAlign: 'center' }} height={100}>
                <img
                  height={60}
                  src={ReactNativeLogo}
                  alt="React Native logo"
                />
              </div>
              <h4>Wednesday (Lecture 3)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Comparison to other mobile frameworks</li>
                <li>Differences to React - native component abstractions</li>
                <li>Common components</li>
                <li>Navigation with React Navigation</li>
                <li>Basic debugging</li>
                <li>
                  <b>Exercise: </b>Prototyping an app complete with navigation,
                  components
                </li>
              </ul>
              <h4>Thursday (Lecture 4)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Styling</li>
                <li>Layout and flexbox</li>
                <li>React Native libraries</li>
                <li>Handling text input</li>
                <li>Network requests</li>
                <li>
                  <b>Exercise: </b>Making requests to an API, displaying results
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="agenda-redux" x={2900} y={620} z={1000} rotate={-6}>
          <Card>
            <CardContent>
              <div className="App-header">
                <div style={{ textAlign: 'center' }} height={100}>
                  <img
                    style={{ margin: -25, marginBottom: -35 }}
                    height={100}
                    src={ReduxLogo}
                    alt="Redux logo"
                  />
                </div>
              </div>
              <h4>Friday (Lecture 5)</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Problems with React component state</li>
                <li>State management with Redux, basic concepts</li>
                <ul style={{ marginTop: 0 }}>
                  <li>Store</li>
                  <li>Actions (action types and action creators)</li>
                  <li>Reducer</li>
                </ul>
                <li>Example of standalone usage</li>
                <li>
                  Usage with React,{' '}
                  <b>
                    <code>react-redux</code>
                  </b>
                </li>
                <ul style={{ marginTop: 0 }}>
                  <li>connect()</li>
                  <li>mapStateToProps()</li>
                  <li>mapDispatchToProps()</li>
                </ul>
                <li>
                  Setting up{' '}
                  <b>
                    <code>react-redux</code>
                  </b>
                </li>
                <li>Debugging experience</li>
                <li>
                  <b>Exercise: </b>Simple Redux use-case
                </li>
                <li>Extra: Persisting store state to disk</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
