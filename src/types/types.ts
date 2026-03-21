export interface StockList {
    symbol: string,
    name: string,
    change: string,
    close: string,
    exchange: string,
    high: string,
    low: string
}

export interface TimeSeries {
    values: {
        datetime: string,
        low: string,
        high: string
    }[]
}

export interface ChartProps {
    timeSeries: TimeSeries
}