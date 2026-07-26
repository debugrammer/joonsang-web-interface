<template>
  <div :style="{ height: `${height}px`, position: 'relative' }">
    <Radar :data="chartData" :options="options" />
  </div>
</template>

<script>
/*
 * chart.js 4 + vue-chartjs 5 — 구 components/widgets/chart/radar-chart.js
 * (chart.js 2 mixins 방식) 등가. 옵션 키는 chart.js 4 문법으로 변환:
 * legend → plugins.legend, scale → scales.r, fontColor → color.
 */
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

export default {
  name: 'RadarChart',
  components: {
    Radar
  },
  props: {
    chartData: {
      type: Object,
      default: null
    },
    height: {
      type: Number,
      default: 250
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            pointLabels: {
              color: 'rgba(255, 255, 255, 0.8)'
            },
            suggestedMin: 0,
            suggestedMax: 10,
            beginAtZero: true,
            ticks: {
              backdropColor: 'transparent',
              color: 'rgba(255, 255, 255, 0.6)'
            }
          }
        }
      })
    }
  }
}
</script>
