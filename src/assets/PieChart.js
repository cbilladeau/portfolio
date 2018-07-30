import {Pie} from 'vue-chartjs'

export default {
    extends: Pie,
    mounted () {
        this.renderChart({
            labels: ['Designing', 'Programming', 'Sleeping', 'Gaming', 'Boxing'],
            datasets: [{
                backgroundColor: ['rgb(42,27,61)', 'rgb(68,49,141)', 'rgb(130,101,167)', 'rgb(216,63,135)', 'rgb(233,128,116)'],
                data: [30, 30, 20, 10, 10],
                datalabels: {
                    font: {
                        family: 'Geo Sans, sans-serif',
                        size: 16
                    },
                    color: 'rgba(255,255,255,1)',
                    anchor: 'center',
                    align: 'end',
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            }]
        }, {
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