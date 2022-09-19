import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class CircularTipoRed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [837,
                89,
                219,
                68,
                7,
                100],
            plotOptions: {

            },

            options: {
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial',
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    customLegendItems: [],
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        colors: '#fff',
                        useSeriesColors: false
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0
                    },
                    onItemClick: {
                        toggleDataSeries: true
                    },
                    onItemHover: {
                        highlightDataSeries: true
                    },
                }
                ,
                chart: {
                    type: 'pie',
                },
                labels: [
                    'FO',
                    'HFC',
                    'PMP',
                    'PTP',
                    'Radio',
                    'Satelital'
                ],
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                    },
                    background: {
                        enabled: false,
                        foreColor: '#fff',
                        padding: 4,
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: '#fff',
                        opacity: 0.9,
                        dropShadow: {
                            enabled: false,
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: '#000',
                            opacity: 0.45
                        }
                    }
                }
            }
        };
    }



    render() {
        return (
            <div className={styles.circlechart}>
                <div className={styles.toptitle}>
                    Tipo de conexión
                </div>
                <div className={styles.graph}>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={'100%'} />
                </div>
            </div>
        );
    }
}



export default CircularTipoRed