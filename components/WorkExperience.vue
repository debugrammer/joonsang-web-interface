<template>
  <client-only>
    <v-row justify="center">
      <v-col v-if="$vuetify.breakpoint.xsOnly" xs="12">
        <v-card color="transparent" elevation="0">
          <v-card-text
            v-for="(item, i) in experience"
            :key="i"
            color="primary"
            small
          >
            <div class="py-4">
              <div class="mb-4">
                <h2 class="headline font-weight-light primary--text">
                  {{ item.title }}
                </h2>
                <span class="grey--text subtitle-1">
                  {{ formatYearMonth(item.start) }} –
                  {{ formatYearMonth(item.end) }}
                  ({{ formatDiffYearMonth(item.start, item.end) }})
                </span>
              </div>
              <!--eslint-disable-next-line vue/no-v-html-->
              <div class="body-1 white--text" v-html="item.content"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-else lg="9">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in experience"
            :key="i"
            color="primary"
            small
          >
            <template v-slot:opposite>
              <span class="headline font-weight-bold">
                {{ formatYearMonth(item.start) }} –
                {{ formatYearMonth(item.end) }}
              </span>
              <br />
              <span class="grey--text subtitle-1">
                {{ formatDiffYearMonth(item.start, item.end) }}
              </span>
            </template>
            <div class="py-4">
              <div class="mb-4">
                <h2 class="headline font-weight-light primary--text">
                  {{ item.title }}
                </h2>
                <span
                  v-if="$vuetify.breakpoint.smAndDown"
                  class="grey--text subtitle-1"
                >
                  {{ formatYearMonth(item.start) }} –
                  {{ formatYearMonth(item.end) }}
                  ({{ formatDiffYearMonth(item.start, item.end) }})
                </span>
              </div>
              <!--eslint-disable-next-line vue/no-v-html-->
              <div v-html="item.content"></div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WorkExperience',
  computed: {
    ...mapGetters({
      experience: 'work-experience/getWorkExperienceData'
    })
  },
  methods: {
    formatYearMonth(yearMonth) {
      if (!yearMonth) {
        return 'Present'
      }

      return this.$moment(yearMonth).format('MMM YYYY')
    },
    formatDiffYearMonth(start, end) {
      const startTime = this.$moment(start)
      const endTime = end ? this.$moment(end) : this.$moment()
      const monthDiff = endTime.diff(startTime, 'months')

      if (monthDiff < 12) {
        if (monthDiff <= 1) {
          return monthDiff + ' mo'
        }

        return monthDiff + ' mos'
      }

      let calcYearDiff = 0
      let calcMonthDiff = monthDiff

      do {
        calcMonthDiff -= 12
        calcYearDiff++
      } while (calcMonthDiff > 11)

      if (calcYearDiff <= 1 && calcMonthDiff <= 1) {
        return calcYearDiff + ' yr ' + calcMonthDiff + ' mo'
      }

      if (calcYearDiff <= 1) {
        return calcYearDiff + ' yr ' + calcMonthDiff + ' mos'
      }

      if (calcMonthDiff <= 1) {
        return calcYearDiff + ' yrs ' + calcMonthDiff + ' mo'
      }

      return calcYearDiff + ' yrs ' + calcMonthDiff + ' mos'
    }
  }
}
</script>
