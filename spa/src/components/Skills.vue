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
      >
        <v-card variant="outlined" height="100%">
          <v-list-item>
            <template #append>
              <v-avatar rounded="0" size="60">
                <v-img :src="item.imgSrc"></v-img>
              </v-avatar>
            </template>
            <div class="text-overline">SKILLS</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <!-- v2 VRating 기본색 복원: 채움=primary·빈별=accent
                   (v3는 기본색이 문맥 상속이라 명시 필요) -->
              <v-rating
                :model-value="item.level"
                length="10"
                size="14"
                density="compact"
                color="accent"
                active-color="primary"
                readonly
              ></v-rating>
            </v-list-item-subtitle>
          </v-list-item>
          <v-card-text>{{ $t(item.description) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapState } from 'pinia'
import { useSkillsStore } from '../stores/skills.js'

export default {
  name: 'Skills',
  computed: {
    ...mapState(useSkillsStore, { skills: 'getSkillsData' })
  }
}
</script>
