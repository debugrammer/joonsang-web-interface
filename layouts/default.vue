<template>
  <v-app id="inspire">
    <app-toolbar />
    <v-content>
      <!-- Page Content -->
      <div class="page-wrapper">
        <nuxt />
      </div>
      <!-- App Footer -->
      <v-footer height="auto" class="pa-4 justify-center">
        <span>
          &copy;{{ $moment().format('YYYY') }} —
          <strong>joonsang.com</strong>
        </span>
      </v-footer>
    </v-content>
    <!-- Go to top -->
    <app-fab />
  </v-app>
</template>

<script>
import AppToolbar from '~/components/AppToolbar'
import AppFab from '~/components/AppFab'

export default {
  components: {
    AppToolbar,
    AppFab
  }
}
</script>

<style lang="scss" scoped>
.v-application {
  font-family: 'Roboto', 'Nanum Gothic', sans-serif;
  line-height: 1.5;
}
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}
.page-wrapper {
  min-height: calc(100vh - 39px - 81px);
}
</style>
