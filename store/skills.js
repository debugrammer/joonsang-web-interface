export const state = () => ({
  skillsData: [
    [
      {
        name: 'JAVA',
        imgSrc: '/logo/java.png',
        level: 8,
        description: 'index.skills.java.description'
      },
      {
        name: 'PHP',
        imgSrc: '/logo/php.png',
        level: 6,
        description: 'index.skills.php.description'
      },
      {
        name: 'JavaScript',
        imgSrc: '/logo/js.png',
        level: 7,
        description: 'index.skills.javascript.description'
      }
    ],
    [
      {
        name: 'Spring Boot',
        imgSrc: '/logo/spring_boot.png',
        level: 8,
        description: 'index.skills.springBoot.description'
      },
      {
        name: 'Nuxt.js',
        imgSrc: '/logo/nuxt.png',
        level: 7,
        description: 'index.skills.nuxt.description'
      },
      {
        name: 'Vue.js',
        imgSrc: '/logo/vue.png',
        level: 6,
        description: 'index.skills.vue.description'
      }
    ]
  ]
})

export const getters = {
  getSkillsData(state) {
    return state.skillsData
  }
}
