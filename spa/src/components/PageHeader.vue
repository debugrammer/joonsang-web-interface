<template>
  <v-row v-if="breadcrumbs" align="center" class="px-6 pt-3 mx-0">
    <div>
      <h2 class="text-h5 font-weight-light">
        {{ title }}
      </h2>
    </div>
    <v-breadcrumbs :items="breadcrumbs">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
      <template #item="{ item }">
        <v-icon v-if="item.icon" size="small">
          {{ item.icon }}
        </v-icon>
        <a v-else :href="item.href" :class="[item.disabled && 'disabled']">
          {{ item.text }}
        </a>
      </template>
    </v-breadcrumbs>
  </v-row>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    title() {
      if (!this.breadcrumbs.length) {
        return ''
      }

      return this.breadcrumbs[this.breadcrumbs.length - 1].text
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
