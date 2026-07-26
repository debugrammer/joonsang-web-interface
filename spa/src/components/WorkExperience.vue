<template>
  <v-row justify="center">
    <v-col v-if="$vuetify.display.xs" cols="12">
      <v-card color="transparent" elevation="0">
        <v-card-text v-for="(item, i) in experience" :key="i">
          <div class="py-4">
            <div class="mb-4">
              <h2 class="text-h5 font-weight-light text-primary">
                {{ $t(item.title) }}
              </h2>
              <span class="text-grey text-subtitle-1">
                {{ formatYearMonth(item.start) }} –
                {{ formatYearMonth(item.end) }}
                ({{ formatDiffYearMonth(item.start, item.end) }})
              </span>
            </div>
            <!--eslint-disable-next-line vue/no-v-html-->
            <div class="text-body-1 text-white" v-html="$t(item.content)"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-else lg="9">
      <v-timeline
        :density="$vuetify.display.smAndDown ? 'comfortable' : 'default'"
        :side="$vuetify.display.smAndDown ? 'end' : undefined"
      >
        <v-timeline-item
          v-for="(item, i) in experience"
          :key="i"
          dot-color="primary"
          size="small"
        >
          <template #opposite>
            <span class="text-h5 font-weight-bold">
              {{ formatYearMonth(item.start) }} –
              {{ formatYearMonth(item.end) }}
            </span>
            <br />
            <span class="text-grey text-subtitle-1">
              {{ formatDiffYearMonth(item.start, item.end) }}
            </span>
          </template>
          <div class="py-4">
            <div class="mb-4">
              <h2 class="text-h5 font-weight-light text-primary">
                {{ $t(item.title) }}
              </h2>
              <span
                v-if="$vuetify.display.smAndDown"
                class="text-grey text-subtitle-1"
              >
                {{ formatYearMonth(item.start) }} –
                {{ formatYearMonth(item.end) }}
                ({{ formatDiffYearMonth(item.start, item.end) }})
              </span>
            </div>
            <!--eslint-disable-next-line vue/no-v-html-->
            <div v-html="$t(item.content)"></div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'pinia'
import { useWorkExperienceStore } from '../stores/work-experience.js'

export default {
  name: 'WorkExperience',
  computed: {
    ...mapState(useWorkExperienceStore, { experience: 'getWorkExperienceData' })
  },
  methods: {
    formatYearMonth(yearMonth) {
      if (!yearMonth) {
        return 'Present'
      }

      return dayjs(yearMonth).format('MMM YYYY')
    },
    formatDiffYearMonth(start, end) {
      const startTime = dayjs(start)
      const endTime = end ? dayjs(end) : dayjs()
      const monthDiff = endTime.diff(startTime, 'month')

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
