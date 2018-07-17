import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
// import 'echarts/lib/component/dataZoom';

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
      title: {
        text: 'daily expenses'
      },
      legend: {
        data: ['breakfast', 'lunch', 'snacks', 'clothing', 'subscribe']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'breakfast',
          type: 'bar',
          stack: '开销',
          data: [0, 8, 0, 7, 7, 7, 0, 0, 0, 0, 0, 5.5]
        },{
          name: 'lunch',
          type: 'bar',
          stack: '开销',
          data: [0, 65.31, 0, 0, 81.70, 0, 0, 0, 0, 82.50, 0, 0, 80.68]
        },{
          name: 'snacks',
          type: 'bar',
          stack: '开销',
          data: [0, 30, 0, 16.90, 0, 0, 0, 0, 0, 50, 69, 0, 139.57, 0, 38.50]
        },{
          name: 'clothing',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'subscribe',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 25, 10, 0, 0, 0, 150, 0]
        }
      ]
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent style={{ width: 1000, height: 450 }} id="pieChart" />
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ChartMonth);
