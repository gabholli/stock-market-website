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
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
            <XAxis dataKey="datetime" stroke="var(--color-text-3)" />
            <YAxis width="auto" stroke="var(--color-text-3)" />
            <Tooltip
                cursor={{
                    stroke: 'var(--color-border-2)',
                }}
                contentStyle={{
                    backgroundColor: 'var(--color-surface-raised)',
                    borderColor: 'var(--color-border-2)',
                }}
            />
            <Legend />
            <Line
                type="monotone"
                dataKey="high"
                stroke="var(--color-chart-1)"
                dot={{
                    fill: 'var(--color-surface-base)',
                }}
                activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
            />
            <Line
                type="monotone"
                dataKey="low"
                stroke="var(--color-chart-2)"
                dot={{
                    fill: 'var(--color-surface-base)',
                }}
                activeDot={{ stroke: 'var(--color-surface-base)' }}
            />
        </LineChart>)
}
