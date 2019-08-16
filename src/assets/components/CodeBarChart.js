import Chart from 'chart.js'
import { generateChart } from 'vue-chartjs'

require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

Chart.defaults.customBar = Chart.defaults.horizontalBar
Chart.controllers.customBar = Chart.controllers.horizontalBar.extend({
    draw: function(ease) {
        Chart.controllers.horizontalBar.prototype.draw.call(this, ease)

        var ctx = this.chart.chart.ctx
        ctx.globalCompositeOperation = 'destination-over'
    }
})

const CustomBar = generateChart('custom-bar', 'customBar')

export default {
    extends: CustomBar,
    mounted() {
        this.addPlugin({
            id: 'chartjs-plugin-datalabels'
        })
        this.renderChart({
            labels: ['HTML5', 'CSS', 'Wordpress', 'SASS & Stylus', 'JS', 'jQuery', 'VueJS', 'PHP', 'Laravel'],
            datasets: [{
                backgroundColor: 'rgba(68, 49, 141, 1)',
                hoverBackgroundColor: 'rgba(68, 49, 141, 1)',
                label: 'Years',
                data: [5, 5, 5, 3, 4, 4, 1, 3, 1],
                datalabels: {
                    display: true,
                    font: {
                        family: 'Geo Sans, sans-serif',
                        size: 16
                    },
                    padding: {
                        left: 0,
                        right: 10,
                        top: 0,
                        bottom: 0
                    },
                    color: 'rgba(0, 0, 0, 0.87)',
                    anchor: 'start',
                    align: 'left',
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.dataIndex]
                    }
                }
            }, {
                backgroundColor: 'rgba(216, 63 , 135, 1)',
                hoverBackgroundColor: 'rgba(216, 63 , 135, 1)',
                label: 'Projects',
                data: [10, 10, 8, 8, 7, 7, 2, 5, 1],
                datalabels: {
                    display: false
                }
            }],
        }, {
            scales: {
                yAxes: [{
                    barPercentage: 0.4,
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
                        stepSize: 1,
                        min: 0,
                        max: 12,
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
            layout: {
                padding: {
                    left: 90,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
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