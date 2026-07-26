<template>
  <div id="page-home">
    <v-container fluid class="pt-0">
      <main-parallax></main-parallax>
      <skills></skills>
      <v-row justify="center">
        <v-col lg="5">
          <about></about>
        </v-col>
        <v-col lg="4">
          <skill-set></skill-set>
        </v-col>
      </v-row>
      <work-experience></work-experience>
    </v-container>
  </div>
</template>

<script>
import MainParallax from '../components/MainParallax.vue'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import SkillSet from '../components/SkillSet.vue'
import WorkExperience from '../components/WorkExperience.vue'

export default {
  name: 'Home',
  components: {
    MainParallax,
    Skills,
    About,
    SkillSet,
    WorkExperience
  }
}
</script>
