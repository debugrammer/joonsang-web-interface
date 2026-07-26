<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      icon
      size="small"
      color="accent"
      class="app-fab"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'AppFab',
  data() {
    return {
      fab: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  // Vue 3: destroyed → unmounted
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const top = window.pageYOffset || document.documentElement.offsetTop || 0

      this.fab = top > 300
    },
    toTop() {
      this.$router.push({ hash: '' })
      // Vuetify 3: $vuetify.goTo 제거 — 표준 API로 대체
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.app-fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
