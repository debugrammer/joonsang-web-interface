<template>
  <v-row justify="center">
    <v-col lg="5">
      <v-card height="100%" outlined>
        <v-list-item>
          <v-list-item-content class="py-0">
            <div class="overline">ABOUT</div>
          </v-list-item-content>
        </v-list-item>

        <v-card-title class="pt-0">Name</v-card-title>
        <v-card-text v-text="$t('index.about.name')"></v-card-text>
        <v-card-title>Education</v-card-title>
        <v-card-text>
          STONY BROOK UNIVERSITY, Stony Brook, New York<br />
          B.S. in Computer Science, Dec. 2015
        </v-card-text>
        <v-card-title>Biography</v-card-title>
        <v-card-text v-text="$t('index.about.biography')"></v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-list>
            <v-list-item>
              <v-list-item-icon color="grey darken-3">
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="$t('index.about.location')"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item href="mailto:debugrammer@gmail.com">
              <v-list-item-icon color="grey darken-3">
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>debugrammer@gmail.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col lg="4">
      <v-card height="100%" outlined>
        <v-list-item>
          <v-list-item-content class="py-0">
            <div class="overline">SKILLSET</div>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <radar-chart
            :chart-data="skillsetRadarChartData"
            :height="250"
          ></radar-chart>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in skillsets" :key="item.type">
                  <td>{{ item.type }}</td>
                  <td>
                    <template v-for="skill in item.skills">
                      <v-chip
                        :key="skill"
                        color="primary"
                        small
                        label
                        outlined
                        class="mx-1"
                      >
                        {{ skill }}
                      </v-chip>
                    </template>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import RadarChart from '~/components/widgets/chart/radar-chart'

export default {
  name: 'About',
  components: {
    RadarChart
  },
  data() {
    return {
      skillsetRadarChartData: {
        labels: [
          'UI/UX Design',
          'Front-end',
          'Back-end',
          'Database',
          'Server Management',
          'System Design'
        ],
        datasets: [
          {
            label: 'Skill Level',
            data: [6, 8, 9, 7, 5, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }
        ]
      },
      skillsets: [
        {
          type: 'UI/UX Design',
          skills: ['Vuetify']
        },
        {
          type: 'Front-end',
          skills: ['Vue.js']
        },
        {
          type: 'Back-end',
          skills: ['Java', 'PHP']
        },
        {
          type: 'Database',
          skills: ['MariaDB']
        },
        {
          type: 'Server Management',
          skills: ['CentOS']
        },
        {
          type: 'System Design',
          skills: ['Dummy']
        }
      ]
    }
  }
}
</script>
