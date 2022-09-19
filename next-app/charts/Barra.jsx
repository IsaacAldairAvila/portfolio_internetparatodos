import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = ({ title, data, color, name }) => {
    const series = [{
        data: data
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
        colors: color,
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
            categories: name,
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
        <div className={styles.chart}>
            <div className={styles.graphsidebar}>
                <p className={styles.toptitle}>
                    {title}
                </p>
                <p className={styles.sidebargr}>
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={'100%'}
                        width={'100%'}
                    />
                </p>

            </div>
        </div>
    )
}

export default ApexChart


