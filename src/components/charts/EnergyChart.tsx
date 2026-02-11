import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

interface EnergyData {
  day: string
  energy: number
}

/**
 * EnergyChart visualizes weekly energy levels.
 * This is UI-only mock data for presentation purposes.
 */
const EnergyChart: React.FC = () => {
  const data: EnergyData[] = [
    { day: 'Mon', energy: 70 },
    { day: 'Tue', energy: 75 },
    { day: 'Wed', energy: 65 },
    { day: 'Thu', energy: 80 },
    { day: 'Fri', energy: 85 },
    { day: 'Sat', energy: 78 },
    { day: 'Sun', energy: 90 },
  ]

  return (
    <div className="energy-chart-card">
      <h3 className="chart-title">Weekly Energy Overview</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnergyChart
