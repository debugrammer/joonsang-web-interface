<template>
  <v-card height="100%" variant="outlined">
    <v-list-item>
      <div class="text-overline">SKILL SET</div>
    </v-list-item>

    <v-card-text>
      <radar-chart :chart-data="skillSetRadarChart" :height="250"></radar-chart>
    </v-card-text>

    <v-card-text>
      <v-table>
        <tbody>
          <tr v-for="item in skillSets" :key="item.type">
            <td>{{ item.type }}</td>
            <td>
              <template v-for="skill in item.skills" :key="skill.name">
                <v-chip
                  color="primary"
                  size="small"
                  label
                  variant="outlined"
                  class="ma-1"
                >
                  {{ skill.name }}
                  <span class="pl-1 text-white">{{ skill.level }}</span>
                </v-chip>
              </template>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'pinia'
import { useSkillSetsStore } from '../stores/skill-sets.js'
import RadarChart from './widgets/chart/RadarChart.vue'

export default {
  name: 'SkillSet',
  components: {
    RadarChart
  },
  computed: {
    ...mapState(useSkillSetsStore, {
      skillSetRadarChart: 'getSkillSetRadarChartData',
      skillSets: 'getSkillSetsData'
    })
  }
}
</script>
