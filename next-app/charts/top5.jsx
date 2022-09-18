import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const cat = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy'
]
const ApexChart = ({ data }) => {
    const series = [{
        data: data.value
    }]
    const options = {
        chart: {
            type: 'bar',
            height: 380,
            toolbar:
            {
                show: false
            },
            background: 'transparent'
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    show: false,
                    position: 'bottom'
                },
            }
        },
        colors: data.color,
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: data.name,
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            enabled: false
        },
        legend: {
            show: false
        },
        theme: {
            mode: 'dark',
        }
    }
    return (

        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={'100%'}
            width={'100%'}
        />
    )
}

export default ApexChart


