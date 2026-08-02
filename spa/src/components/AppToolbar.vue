<template>
  <v-app-bar color="secondary">
    <v-img max-width="135" src="/logo.png" alt="joonsang.com"></v-img>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndDown">
      <v-btn
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')"
        variant="text"
        icon
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
      <v-btn
        v-else-if="$i18n.locale !== 'kr'"
        :to="switchLocalePath('kr')"
        variant="text"
        icon
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')"
        variant="outlined"
      >
        <v-icon start>mdi-translate</v-icon> English
      </v-btn>
      <v-btn
        v-else-if="$i18n.locale !== 'kr'"
        :to="switchLocalePath('kr')"
        variant="outlined"
      >
        <v-icon start>mdi-translate</v-icon> 한국어
      </v-btn>
    </template>

    <v-divider v-if="$vuetify.display.mdAndDown" vertical></v-divider>

    <v-menu v-if="$vuetify.display.xs">
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in menu.external"
          :key="i"
          :href="item.href"
          :target="item.target"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item>
      </v-list>
    </v-menu>
    <template v-else>
      <template v-for="(item, i) in menu.external" :key="i">
        <v-btn :href="item.href" :target="item.target" variant="text" icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </template>
    </template>

    <v-divider vertical></v-divider>

    <v-menu v-if="$vuetify.display.xs">
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in menu.internal"
          :key="i"
          :to="path(item.to)"
          exact
        >
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-items v-else>
      <template v-for="(item, i) in menu.internal" :key="i">
        <v-btn :to="path(item.to)" exact variant="text">
          <v-icon start>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapState } from 'pinia'
import { useMenuStore } from '../stores/menu.js'
import { DEFAULT_LOCALE } from '../i18n/index.js'

export default {
  name: 'AppToolbar',
  computed: {
    ...mapState(useMenuStore, { menu: 'getMenuData' })
  },
  methods: {
    // nuxt-i18n switchLocalePath 등가 — 현재 경로의 로케일 프리픽스만 교체.
    // path·query·hash를 분리해 다룬다 (fullPath 문자열 치환은 `/en?x=1`처럼
    // 프리픽스 바로 뒤에 ?·#이 오면 미치환 — codex R1 #4)
    switchLocalePath(locale) {
      const suffix = this.$route.path.replace(/^\/en(?=\/|$)/, '') || '/'
      const path =
        locale === DEFAULT_LOCALE
          ? suffix
          : suffix === '/'
            ? `/${locale}`
            : `/${locale}${suffix}`

      return { path, query: this.$route.query, hash: this.$route.hash }
    },
    path(link) {
      if (this.$i18n.locale === this.$i18n.fallbackLocale) {
        return link
      }

      return link === '/'
        ? `/${this.$i18n.locale}`
        : `/${this.$i18n.locale}${link}`
    }
  }
}
</script>
