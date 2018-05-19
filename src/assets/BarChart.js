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
                backgroundColor: 'rgba(154,29,45,0.7)',
                data: [90, 90, 50, 30, 70, 90, 60],
                datalabels: {
                    display: false
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
                        family: 'Lato',
                        weight: '600',
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
                    categoryPercentage: 0.7,
                    stacked: true,
                    ticks: {
                        mirror: true,
                        fontColor: 'rgba(255,255,255,1)',
                        fontFamily: 'Lato',
                        fontStyle: 'bold',
                        fontSize: 14,
                        padding: -15
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