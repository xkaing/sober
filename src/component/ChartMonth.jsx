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
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
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
          name: '邮件营销',
          type: 'bar',
          stack: '日常开销',
          data: [120, 132, 101, 134, 90, 230, 210]
        },{
          name: '联盟广告',
          type: 'bar',
          stack: '日常开销',
          data: [220, 182, 191, 234, 290, 330, 310]
        },{
          name: '视频广告',
          type: 'bar',
          stack: '日常开销',
          data: [150, 232, 201, 154, 190, 330, 410]
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
