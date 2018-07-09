import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Finance from './view/finance';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Finance />
      </React.Fragment>
    );
  }
}

export default App;
