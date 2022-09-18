import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class RadialTipoConexion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [834, 486],
            options: {
                chart: {
                    height: 100,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetX: 50,
                        offsetY: 15,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#0593A2', '#E3371E'],
                labels: ['C&W Panamá', 'Liberty Technologies'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    position: 'left',
                    offsetX: 0,
                    offsetY: 15,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 10
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical:1
                    }
                },
                responsive: [{
                    breakpoint: 300,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (

            <div className={styles.circlechart}>
                <div className={styles.toptitle}>
                    Distribución proovedores
                </div>
                <div className={styles.graph}>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={'100%'} />
                </div>
            </div>
        )
    }
}

export default RadialTipoConexion


