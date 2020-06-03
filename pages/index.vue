<template>
  <div id="page-home">
    <v-container grid-list-xl fluid pt-0>
      <main-parallax></main-parallax>
      <skills></skills>
      <about></about>
      <work-experience></work-experience>
    </v-container>
  </div>
</template>

<script>
import MainParallax from '~/components/MainParallax'
import Skills from '~/components/Skills'
import About from '~/components/About'
import WorkExperience from '~/components/WorkExperience'

export default {
  components: {
    MainParallax,
    Skills,
    About,
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
