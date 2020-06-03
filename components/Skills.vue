<template>
  <v-row no-gutters>
    <v-row v-for="(row, i) in skills" :key="i" justify="center">
      <v-col
        v-for="(item, j) in row"
        :key="j"
        cols="auto"
        lg="3"
        md="4"
        sm="12"
        xs="12"
      >
        <v-card outlined height="100%">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overline mb-4">SKILLS</div>
              <v-list-item-title
                class="headline mb-1"
                v-text="item.name"
              ></v-list-item-title>
              <v-list-item-subtitle>
                <v-rating
                  :value="item.level"
                  length="10"
                  size="14"
                  dense
                  readonly
                ></v-rating>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="60">
              <v-img :src="item.imgSrc" contain></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-card-text v-text="item.description"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Skill',
  computed: {
    ...mapGetters({
      skills: 'skills/getSkillsData'
    })
  }
}
</script>
