import {Bar} from 'vue-chartjs'

require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

export default {
    extends: Bar,
    mounted () {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
        this.gradient.addColorStop(1, 'rgba(42, 27, 61, 0.9)');
        this.gradient.addColorStop(0, 'rgba(216, 63 , 135, 0.80)');

        this.gradientHover = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
        this.gradientHover.addColorStop(1, 'rgba(42, 27, 61, 1)');
        this.gradientHover.addColorStop(0, 'rgba(216, 63 , 135, 1)');

        this.addPlugin({
            id: 'chartjs-plugin-datalabels'
        })
        this.renderChart({
            labels: ['Photoshop', 'Illustrator', 'InDesign', 'UXPin', 'Axure'],
            datasets: [{
                backgroundColor: this.gradient,
                hoverBackgroundColor: this.gradientHover,
                data: [100, 70, 60, 80, 70],
                datalabels: {
                    font: {
                        family: 'Geo Sans, sans-serif',
                        size: 18
                    },
                    color: 'rgba(255,255,255,1)',
                    align: 'top',
                    anchor: 'start',
                    rotation: -90,
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            }, {
                backgroundColor: 'rgba(0,0,0,0.12)',
                hoverBackgroundColor: 'rgba(0,0,0,0.12)',
                data: [0, 30, 40, 20, 30],
                datalabels: {
                    display: false,
                }
            }],
        }, {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    barPercentage: 0.5,
                    categoryPercentage: 1,
                    stacked: true,
                    ticks: {
                        display: false,
                        min: 0,
                        max: 100,
                    },
                    pointLabel: {
                        display: true
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                enabled: false
            },
        })
    }
}