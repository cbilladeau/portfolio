import {Pie} from 'vue-chartjs'

export default {
    extends: Pie,
    mounted () {
        this.renderChart({
            labels: ['Designing', 'Programming', 'Sleeping', 'Gaming', 'Boxing'],
            datasets: [{
                backgroundColor: ['#26142E', '#411F2F', '#611C2E', '#9A1D2D', '#C53827'],
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