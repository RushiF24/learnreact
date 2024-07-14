import React from 'react'
import BarChart from './BarChart'
import "./Chart.css"

const Chart = (props) => {
  
  const dataPointsValues = props.datapoints.map(datapoint => datapoint.value)
  const totalMaximum = Math.max(...dataPointsValues)

    
  return (
    <div className='chart'>
      {props.datapoints.map((datapoint) => (
        <BarChart
          key={datapoint.label}
          value={datapoint.value}
            maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
