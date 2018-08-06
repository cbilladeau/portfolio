import {Bar} from 'vue-chartjs'

export default {
    extends: Bar,
    mounted () {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
        this.gradient.addColorStop(1, 'rgba(68, 49, 141, 0.9)');
        this.gradient.addColorStop(0, 'rgba(216, 63 , 135, 0.80)');

        this.gradientHover = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
        this.gradientHover.addColorStop(1, 'rgba(68, 49, 141, 1)');
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
                        size: 16
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
                    // display: true,
                    // align: 'bottom',
                    // anchor: 'end',
                    // color: 'rgba(0,0,0,0.56)',
                    // font: {
                    //     family: 'Typewriter Condensed, sans-serif',
                    //     size: 14
                    // },
                    // formatter: function(value, context) {
                    //     return (100-value) + '%';
                    // }
                }
            // }, {
            //     backgroundColor: 'rgba(0,0,0,0.12)',
            //     hoverBackgroundColor: 'rgba(0,0,0,0.12)',
            //     data: [100, 100, 100, 100, 100, 100, 100],
            //     datalabels: {
            //         display: false,
            //     }
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
                    barPercentage: 0.6,
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