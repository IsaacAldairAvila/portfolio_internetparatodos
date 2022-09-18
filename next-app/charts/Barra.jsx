import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = ({ title }) => {
    const series = [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
        ],
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
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'India'
            ],
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
        theme:{
            mode: 'dark', 
        }
    }
    return (
        <div className={styles.chart}>
            <p className={styles.title}>
                {title}
            </p>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={'70%'}
                width={'100%'}
            />
        </div>
    )
}

export default ApexChart


