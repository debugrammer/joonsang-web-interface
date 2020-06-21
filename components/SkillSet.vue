<template>
  <v-card height="100%" outlined>
    <v-list-item>
      <v-list-item-content class="py-0">
        <div class="overline">SKILL SET</div>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <radar-chart :chart-data="skillSetRadarChart" :height="250"></radar-chart>
    </v-card-text>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="item in skillSets" :key="item.type">
              <td>{{ item.type }}</td>
              <td>
                <template v-for="skill in item.skills">
                  <v-chip
                    :key="skill.name"
                    color="primary"
                    small
                    label
                    outlined
                    class="ma-1"
                  >
                    {{ skill.name }}
                    <span class="pl-1 white--text">{{ skill.level }}</span>
                  </v-chip>
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import RadarChart from '~/components/widgets/chart/radar-chart'

export default {
  name: 'SkillSet',
  components: {
    RadarChart
  },
  computed: {
    ...mapGetters({
      skillSetRadarChart: 'skill-sets/getSkillSetRadarChartData',
      skillSets: 'skill-sets/getSkillSetsData'
    })
  }
}
</script>
