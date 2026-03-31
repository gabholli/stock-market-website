import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { ChartProps } from '../../types/types'

export default function Chart({ timeSeries }: ChartProps) {
    return (
        <>
            <h1 className='mb-6'>Price Trends</h1>
            <div className='w-96 px-12 md:px-0'>
                <div className='h-full w-full'>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            // style={{ width: 300, maxWidth: '700px', height: 300, maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={timeSeries?.values?.map(item => ({
                                datetime: item.datetime.substring(0, 7),
                                low: parseFloat(item.low).toFixed(2),
                                high: parseFloat(item.high).toFixed(2)
                            })).reverse() ?? []}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" />
                            <XAxis
                                dataKey="datetime"
                                stroke="#FFFFFF"
                                dx={-15}
                                minTickGap={20}
                            />
                            <YAxis
                                width="auto"
                                domain={["auto", "auto"]}
                                stroke="#FFFFFF"
                                tickFormatter={v => `$${v}`}
                            />
                            <Tooltip
                                cursor={{
                                    stroke: '#0000FF',
                                }}
                                contentStyle={{
                                    color: "#000000",
                                    backgroundColor: '#ADD8E6',
                                    borderColor: 'var(--color-border-2)',
                                }}
                                formatter={v => `$${v}`}
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
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div >
        </>
    )
}
