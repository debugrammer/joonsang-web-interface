<template>
  <div id="page-portfolio">
    <v-container grid-list-xl fluid>
      <page-header :breadcrumbs="breadcrumbs" />
      <client-only>
        <v-layout row wrap>
          <v-flex v-for="(item, i) in portfolio" :key="i" lg4 sm6 xs12>
            <v-card elevation="5" height="100%" outlined>
              <v-img :src="item.imgSrc" height="200px">
                <v-card-title
                  class="align-end fill-height bottom-gradient"
                  v-text="item.title"
                />
              </v-img>
              <v-card-title class="subtitle-1">
                <v-icon class="pr-2">mdi-clock-outline</v-icon>
                Project Dates
              </v-card-title>
              <v-card-text v-text="item.period" />
              <v-card-title class="subtitle-1">
                <v-icon class="pr-2">mdi-code-tags</v-icon>
                Development Environments
              </v-card-title>
              <v-card-text>
                <template v-for="(environment, j) in item.environments">
                  <v-chip
                    :key="j"
                    color="primary"
                    outlined
                    label
                    class="mx-1"
                    v-text="environment"
                  />
                </template>
              </v-card-text>
              <v-card-title class="subtitle-1">
                <v-icon class="pr-2">mdi-file-document-outline</v-icon>
                Project Details
              </v-card-title>
              <v-card-text v-text="item.description" />
              <v-divider class="mx-4" />
              <v-card-actions v-for="(link, k) in item.links" :key="k">
                <v-list-item :href="link.url" target="_blank">
                  <v-list-item-icon color="grey darken-3">
                    <v-icon v-text="link.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="link.name" />
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </client-only>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      pageTitle: 'Portfolio'
    }
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolio/getPortfolioData'
    }),
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
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio page of web developer Joonsang Park.'
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
