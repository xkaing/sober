import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';

const styles = {
  card: {
    maxWidth: 1000,
    margin: '0 auto',
  },
};

class ChartMonth extends Component {

  componentDidMount(){
    let myChart = echarts.init(document.getElementById('pieChart'));
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sat', 'Sun', 'Sat', 'Sun', 'Sat', 'Sun', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 110, 130, 110, 130, 110, 130, 110, 130],
        type: 'bar'
      }]
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent style={{ width: 1000, height: 400 }} id="pieChart" />
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ChartMonth);
