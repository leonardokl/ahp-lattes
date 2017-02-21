import React from 'react'
import ChartJS from 'chart.js'

const options = {
    responsive: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}

class Chart extends React.Component {
  get data() {
    const labels = this.props.data.map(data => data.label)
    const datasets = [
      {
        data: this.props.data.map(data => data.value),
        backgroundColor: this.props.data.map(data => data.color)
      }
    ]

    return {
      labels,
      datasets
    }
  }

  get config() {
    return {
      type: 'doughnut',
      data: this.data,
      options
    }
  }

  createChart = () => {
    this.chart = new ChartJS(this.el, this.config)
  }

  updateChart = () => {
    this.chart.destroy()
    this.chart = new ChartJS(this.el, this.config)
  }

  componentDidMount() {
    this.createChart()
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  shouldComponentUpdate(nextProps) {
    return !!(nextProps.data !== this.props.data)
  }

  componentDidUpdate() {
    this.updateChart()
  }

  render() {
    return (
      <canvas
        ref={(el) => (this.el = el)}
        width={400}
        height={400}
      />
    )
  }
}

module.exports = Chart
