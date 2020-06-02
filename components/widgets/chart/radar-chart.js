import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Radar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            beginAtZero: true
          }
        }
      })
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
