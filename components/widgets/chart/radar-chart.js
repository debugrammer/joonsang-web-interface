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
        scale: {
          angleLines: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          pointLabels: {
            fontColor: 'rgba(255, 255, 255, 0.8)'
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            beginAtZero: true,
            backdropColor: 'transparent',
            fontColor: 'rgba(255, 255, 255, 0.6)'
          }
        }
      })
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
