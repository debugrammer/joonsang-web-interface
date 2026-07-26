<template>
  <div>
    <app-toolbar></app-toolbar>
    <v-main>
      <!-- Page Content -->
      <div class="page-wrapper">
        <router-view />
      </div>
      <!-- App Footer -->
      <v-footer height="auto" class="pa-4 justify-center">
        <span>
          &copy;{{ year }} —
          <strong>Joonsang.com</strong>
        </span>
      </v-footer>
    </v-main>
    <!-- Go to top -->
    <app-fab></app-fab>
  </div>
</template>

<script>
import AppToolbar from '../components/AppToolbar.vue'
import AppFab from '../components/AppFab.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppToolbar,
    AppFab
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: calc(100vh - 39px - 81px);
}
</style>
