<template>
  <client-only>
    <v-app-bar color="secondary" app fixed dark>
      <v-img max-width="135" src="/logo.png" alt="joonsang.com"></v-img>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.xsOnly">
        <v-btn
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
          text
          icon
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
        <v-btn
          v-else-if="$i18n.locale !== 'kr'"
          :to="switchLocalePath('kr')"
          text
          icon
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
          outlined
        >
          <v-icon left>mdi-translate</v-icon> English
        </v-btn>
        <v-btn
          v-else-if="$i18n.locale !== 'kr'"
          :to="switchLocalePath('kr')"
          outlined
        >
          <v-icon left>mdi-translate</v-icon> 한국어
        </v-btn>
      </template>

      <v-menu v-if="$vuetify.breakpoint.xsOnly" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item-group v-for="(item, i) in menu.external" :key="i">
            <v-list-item :href="item.href" :target="item.target">
              <v-list-item>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <template v-else>
        <template v-for="(item, i) in menu.external">
          <v-btn :key="i" :href="item.href" :target="item.target" text icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-btn>
        </template>
      </template>

      <v-divider vertical></v-divider>

      <v-menu v-if="$vuetify.breakpoint.xsOnly" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group v-for="(item, i) in menu.internal" :key="i">
            <v-list-item :to="path(item.to)" exact>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-toolbar-items v-else>
        <template v-for="(item, i) in menu.internal">
          <v-btn :key="i" :to="path(item.to)" exact text>
            <v-icon left v-text="item.icon"></v-icon>
            {{ item.title }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-app-bar>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppToolbar',
  computed: {
    ...mapGetters({
      menu: 'menu/getMenuData'
    })
  },
  methods: {
    path(link) {
      if (this.$i18n.locale === this.$i18n.fallbackLocale) {
        return link
      }

      return `/${this.$i18n.locale}${link}`
    }
  }
}
</script>
