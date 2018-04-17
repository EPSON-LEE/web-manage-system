import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
// import styles from './index.css'

export default class Chart extends Component {
  getOption = () => {
    return {
      title: {
        text: '个人绩效图'
      },
      legend: {
        data: ['最高气温', '最低气温']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: '您的{b}月绩效为{c}'
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
      ],
      yAxis: [
        {
          type: 'category',
          boundaryGap: true,
          splitLine: {
            show: true
          },
          data: ['D', 'C', 'B', 'A', 'S'],
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#993400', '#e46c0b', '#99cc67', '#ffc000', '#ffff00']
            }
          }
        }
      ],
      series: [
        {
          name: '个人绩效',
          type: 'line',
          data: ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A']
          // data: [110, 120, 90, 0, 105],
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <ReactEcharts
          option={this.getOption()}
          style={{height: '500px', width: '40%'}} />
      </div>
    )
  }
}
