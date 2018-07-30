import {HorizontalBar} from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    mounted () {
        this.addPlugin({
            id: 'chartjs-plugin-datalabels'
        })
        this.renderChart({
            labels: ['HTML5', 'CSS', 'Javascript', 'PHP', 'UI Design', 'Photoshop', 'Illustrator'],
            datasets: [{
                backgroundColor: 'rgb(233,128,116)',
                data: [90, 90, 50, 30, 70, 90, 60],
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
                data: [10, 10, 50, 70, 30, 10, 40],
                datalabels: {
                    display: true,
                    align: 'left',
                    anchor: 'end',
                    color: 'rgba(0,0,0,0.56)',
                    font: {
                        family: 'Typewriter Condensed, sans-serif',
                        size: 14
                    },
                    formatter: function(value, context) {
                        return (100-value) + '%';
                    }
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
                    barPercentage: 1,
                    categoryPercentage: 0.8,
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