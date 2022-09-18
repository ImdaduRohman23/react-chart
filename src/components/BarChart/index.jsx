import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";



const BarChart = () => {
    const state = {
        series: [{
            name: 'Amount of Car Rented',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 58, 63, 60, 66,]
        }],
        options: {
            chart: {
            type: 'bar',
            height: 350
            },
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
            },
            dataLabels: {
            enabled: false
            },
            stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
            },
            xaxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
            title: {
                text: 'date'
            }
            },
            yaxis: {
            title: {
                text: 'Amount of Car Rented'
            }
            },
            fill: {
            opacity: 1
            },
            tooltip: {
            y: {
                formatter: function (val) {
                return val + " cars"
                }
            }
            },
            grid: {
                show: true,
                borderColor: '#CCCCCC',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: true
                    }
                },  
                row: {
                    colors: undefined,
                    opacity: 0.5
                },  
                column: {
                    colors: undefined,
                    opacity: 0.5
                },  
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },  
            },
            colors: ['#586B90']
        },
    };

    return (
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
                />
            </div>
            </div>
        </div>
    )
}

export default BarChart
