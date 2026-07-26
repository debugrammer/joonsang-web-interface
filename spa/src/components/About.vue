<template>
  <v-card height="100%" variant="outlined">
    <v-list-item>
      <div class="text-overline">ABOUT</div>
    </v-list-item>

    <v-card-title class="pt-0">Name</v-card-title>
    <v-card-text>{{ $t('index.about.name') }}</v-card-text>
    <v-card-title>Education</v-card-title>
    <v-card-text>
      STONY BROOK UNIVERSITY, Stony Brook, New York<br />
      B.S. in Computer Science, Dec. 2015
    </v-card-text>
    <v-card-title>Biography</v-card-title>
    <v-card-text>{{ $t('index.about.biography') }}</v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-icon>mdi-map-marker</v-icon>
          </template>
          <v-list-item-title>
            {{ $t('index.about.location') }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item href="mailto:debugrammer@gmail.com">
          <template #prepend>
            <v-icon>mdi-email</v-icon>
          </template>
          <v-list-item-title>debugrammer@gmail.com</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About'
}
</script>
