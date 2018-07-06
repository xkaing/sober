import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
