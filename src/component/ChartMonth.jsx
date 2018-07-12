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
        text: '7月开销统计'
      },
      legend: {
        data: ['早餐', '午餐', '零食', '衣着', '信用卡', '外债', '京东金融', '公交卡', '支付宝群收款', '阿里云服务', '饿了么会员']
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
        data: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '早餐',
          type: 'bar',
          stack: '开销',
          data: [0, 8, 0, 7, 7, 7, 0, 0, 0, 0, 0]
        },{
          name: '午餐',
          type: 'bar',
          stack: '开销',
          data: [0, 65.31, 0, 0, 81.70, 0, 0, 0, 0, 82.50, 0]
        },{
          name: '零食',
          type: 'bar',
          stack: '开销',
          data: [0, 30, 0, 16.90, 0, 0, 0, 0, 0, 50, 69]
        },{
          name: '衣着',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0]
        },{
          name: '信用卡',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4801, 0]
        },{
          name: '外债',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4863, 0]
        }, {
          name: '京东金融',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 990, 0]
        }, {
          name: '公交卡',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0]
        }, {
          name: '支付宝群收款',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 0]
        }, {
          name: '阿里云服务',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0]
        }, {
          name: '饿了么会员',
          type: 'bar',
          stack: '开销',
          data: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0]
        },
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
