import {HorizontalBar} from 'vue-chartjs'

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
            labels: ['HTML5', 'CSS', 'SASS, LESS, Stylus', 'JS', 'jQuery', 'VueJS', 'PHP'],
            datasets: [{
                backgroundColor: this.gradient,
                hoverBackgroundColor: this.gradientHover,
                data: [100, 95, 80, 65, 70, 50, 50],
                datalabels: {
                    font: {
                        family: 'Geo Sans, sans-serif',
                        size: 16
                    },
                    color: 'rgba(255,255,255,1)',
                    align: 'right',
                    anchor: 'start',
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            }, {
                backgroundColor: 'rgba(0,0,0,0.12)',
                hoverBackgroundColor: 'rgba(0,0,0,0.12)',
                data: [0, 5, 20, 35, 30, 50, 50],
                datalabels: {
                    display: false,
                }
            }, {
                backgroundColor: 'rgba(0,0,0,0.12)',
                hoverBackgroundColor: 'rgba(0,0,0,0.12)',
                data: [100, 100, 100, 100, 100, 100, 100],
                datalabels: {
                    display: false,
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