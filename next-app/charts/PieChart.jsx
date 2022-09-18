import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Charts.module.css'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class CircularTipoRed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        };
    }



    render() {
        return (
            <div className={styles.circlechart}>
                <div className={styles.toptitle}>
                    Top 5 consumo en GB mensual
                </div>
                <div className={styles.graph}>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={'100%'} />
                </div>
            </div>
        );
    }
}



export default CircularTipoRed