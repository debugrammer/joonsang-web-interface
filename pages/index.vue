<template>
  <div id="page-home">
    <v-container grid-list-xl fluid pt-0>
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
import MainParallax from '~/components/MainParallax'
import Skills from '~/components/Skills'
import About from '~/components/About'
import SkillSet from '~/components/SkillSet'
import WorkExperience from '~/components/WorkExperience'

export default {
  components: {
    MainParallax,
    Skills,
    About,
    SkillSet,
    WorkExperience
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page of web developer Joonsang Park.'
        }
      ]
    }
  }
}
</script>
