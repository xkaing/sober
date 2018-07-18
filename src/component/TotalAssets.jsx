import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  total: {

  }
};

class TotalAssets extends Component {


  render() {
    const {classes} = this.props;

    return (
      <div>
        <Typography className={classes.total} variant="display1" align="center" gutterBottom >
          8888
        </Typography>
      </div>
    ) 
  }
}

export default withStyles(styles)(TotalAssets);
