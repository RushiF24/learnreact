import React from 'react'
import BarChart from './BarChart'
import "./Chart.css"

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.datapoints.map((datapoint) => (
        <BarChart
          key={datapoint.id}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
