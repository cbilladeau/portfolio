import Chart from 'chart.js'
import { generateChart } from 'vue-chartjs'

require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

Chart.defaults.customRadar = Chart.defaults.radar;
Chart.controllers.customRadar = Chart.controllers.radar.extend({})

const CustomRadar = generateChart('custom-radar', 'customRadar')

export default {
    extends: CustomRadar,
    mounted() {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 120);
        this.gradient.addColorStop(0, 'rgba(216, 63 , 135, 0.9)');
        this.gradient.addColorStop(1, 'rgba(233, 128, 116, 0.8)');

        this.addPlugin({
            id: 'chartjs-plugin-datalabels'
        }),
        this.renderChart({
            labels: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
            datasets: [{
                data: [10, 5, 8, 6, 9, 5],
                datalabels: { display: false },
                backgroundColor: this.gradient,
                borderColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: 'transparent',
                pointHoverBorderColor: 'transparent',
            }]
        }, {
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false
            },
            scale: {
                pointLabels: {
                    fontFamily: 'Typewriter Condensed, sans-serif',
                    fontSize: 12
                },
                ticks: {
                    min: 0,
                    maxTicksLimit: 1,
                    display: false
                }
            }
        })
    },
    computed: {}
}