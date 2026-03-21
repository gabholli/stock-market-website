import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import type { ChartProps } from '../types/types'

export default function Chart({ timeSeries }: ChartProps) {
    return (
        <LineChart
            style={{ width: 300, maxWidth: '700px', height: 300, maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={timeSeries.values.map(item => ({
                datetime: item.datetime,
                low: item.low,
                high: item.high
            })).reverse()}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" stroke="#0047AB" />
            <XAxis dataKey="datetime" stroke="var(--color-text-3)" />
            <YAxis width="auto" stroke="var(--color-text-3)" />
            <Tooltip
                cursor={{
                    stroke: '#0000FF',
                }}
                contentStyle={{
                    backgroundColor: '#ADD8E6',
                    borderColor: 'var(--color-border-2)',
                }}
            />
            <Legend />
            <Line
                type="monotone"
                dataKey="high"
                stroke="#0000FF"
                dot={{
                    fill: '#0000FF',
                }}
                activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
            />
            <Line
                type="monotone"
                dataKey="low"
                stroke="#0047AB"
                dot={{
                    fill: '#0047AB',
                }}
                activeDot={{ stroke: 'var(--color-surface-base)' }}
            />
        </LineChart>)
}
