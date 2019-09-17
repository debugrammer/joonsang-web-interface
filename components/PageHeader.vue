<template>
  <v-layout v-if="breadcrumbs" row align-center px-6 pt-3 mx-0>
    <div>
      <h2 class="headline font-weight-light">
        {{ title }}
      </h2>
    </div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-icon v-if="item.icon" small>
          {{ item.icon }}
        </v-icon>
        <a v-else :href="item.href" :class="[item.disabled && 'disabled']">
          {{ item.text }}
        </a>
      </template>
    </v-breadcrumbs>
  </v-layout>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'PageHeader',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    title() {
      if (_.isEmpty(this.breadcrumbs)) {
        return ''
      }

      return _.last(this.breadcrumbs).text
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  color: grey;
  pointer-events: none;
}
</style>
