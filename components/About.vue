<template>
  <v-card height="100%" outlined>
    <v-list-item>
      <v-list-item-content class="py-0">
        <div class="overline">ABOUT</div>
      </v-list-item-content>
    </v-list-item>

    <v-card-title class="pt-0">Name</v-card-title>
    <v-card-text v-text="$t('index.about.name')"></v-card-text>
    <v-card-title>Education</v-card-title>
    <v-card-text>
      STONY BROOK UNIVERSITY, Stony Brook, New York<br />
      B.S. in Computer Science, Dec. 2015
    </v-card-text>
    <v-card-title>Biography</v-card-title>
    <v-card-text v-text="$t('index.about.biography')"></v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-icon color="grey darken-3">
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t('index.about.location')"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="mailto:debugrammer@gmail.com">
          <v-list-item-icon color="grey darken-3">
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>debugrammer@gmail.com</v-list-item-title>
          </v-list-item-content>
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
