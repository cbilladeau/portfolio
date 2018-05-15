import {Pie} from 'vue-chartjs'

export default {
    extends: Pie,
    mounted () {
        this.renderChart({
            labels: ['Designing', 'Programming', 'Sleeping', 'Gaming', 'Boxing'],
            datasets: [{
                backgroundColor: ['#490A3D', '#BD1550', '#E97F02', '#F8CA00', '#8A9B0F'],
                data: [30, 30, 20, 10, 10],
                datalabels: {
                    display: false
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