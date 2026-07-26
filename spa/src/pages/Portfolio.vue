<template>
  <div id="page-portfolio">
    <v-container fluid>
      <page-header :breadcrumbs="breadcrumbs"></page-header>
      <v-row>
        <v-col v-for="(item, i) in portfolio" :key="i" cols="12" sm="6" lg="4">
          <v-card elevation="5" height="100%" variant="outlined">
            <v-img :src="item.imgSrc" height="200px" cover>
              <v-card-title class="align-end fill-height bottom-gradient">
                {{ $t(item.title) }}
              </v-card-title>
            </v-img>
            <v-card-title class="text-subtitle-1">
              <v-icon class="pr-2">mdi-clock-outline</v-icon>
              Project Dates
            </v-card-title>
            <v-card-text>{{ item.period }}</v-card-text>
            <v-card-title class="text-subtitle-1">
              <v-icon class="pr-2">mdi-code-tags</v-icon>
              Development Environments
            </v-card-title>
            <v-card-text>
              <template v-for="(environment, j) in item.environments" :key="j">
                <v-chip color="primary" variant="outlined" label class="mx-1">
                  {{ environment }}
                </v-chip>
              </template>
            </v-card-text>
            <v-card-title class="text-subtitle-1">
              <v-icon class="pr-2">mdi-file-document-outline</v-icon>
              Project Details
            </v-card-title>
            <v-card-text>{{ $t(item.description) }}</v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions v-for="(link, k) in item.links" :key="k">
              <v-list-item :href="link.url" target="_blank">
                <template #prepend>
                  <v-icon>{{ link.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ link.name }}</v-list-item-title>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { usePortfolioStore } from '../stores/portfolio.js'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'Portfolio',
  components: {
    PageHeader
  },
  data() {
    return {
      pageTitle: 'Portfolio'
    }
  },
  computed: {
    ...mapState(usePortfolioStore, { portfolio: 'getPortfolioData' }),
    breadcrumbs() {
      return [
        {
          icon: 'mdi-home'
        },
        {
          text: this.pageTitle,
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>
