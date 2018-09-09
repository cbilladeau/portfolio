import {HorizontalBar} from 'vue-chartjs'

require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

export default {
    extends: HorizontalBar,
    mounted () {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 150, 0);
        this.gradient.addColorStop(0, 'rgba(68, 49, 141, 0.9)');
        this.gradient.addColorStop(1, 'rgba(216, 63 , 135, 0.80)');

        this.gradientHover = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 150, 0);
        this.gradientHover.addColorStop(0, 'rgba(68, 49, 141, 1)');
        this.gradientHover.addColorStop(1, 'rgba(216, 63 , 135, 1)');

        this.addPlugin({
            id: 'chartjs-plugin-datalabels'
        })
        this.renderChart({
            labels: ['HTML5', 'CSS', 'Wordpress', 'SASS, LESS, Stylus', 'JS', 'jQuery', 'VueJS', 'PHP'],
            datasets: [{
                backgroundColor: 'rgba(68, 49, 141, 0.9)',
                hoverBackgroundColor: 'rgba(68, 49, 141, 1)',
                label: '# of Years',
                //yAxisID: 'years-axis',
                data: [5, 5, 5, 2, 2, 3, 1, 2],
                datalabels: {
                    display: false
                }
            }, {
                backgroundColor: 'rgba(216, 63 , 135, 0.80)',
                hoverBackgroundColor: 'rgba(216, 63 , 135, 1)',
                label: '# of Projects',
                //yAxisID: 'projects-axis',
                data: [7, 7, 4, 5, 3, 3, 2, 1],
                datalabels: {
                    display: false
                }
            }],
        }, {
            scales: {
                yAxes: [{
                    barPercentage: 0.7,
                    categoryPercentage: 1,
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
                    stacked: true,
                    ticks: {
                        display: true,
                        stepSize: 1,
                        min: 0,
                        max: 12,
                    },
                    pointLabel: {
                        display: true
                    },
                    gridLines: {
                        display: true,
                        lineWidth: 4,
                        color: 'rgba(255, 255, 255, 1)',
                        zeroLineColor: 'rgba(255, 255, 255, 1)',
                        drawBorder: false
                    }
                }]
            },
            legend: {
                display: true
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