export const state = () => ({
  menuData: {
    external: [
      {
        href: 'https://github.com/debugrammer',
        icon: 'mdi-github',
        target: '_blank'
      },
      {
        href: 'https://www.linkedin.com/in/iowa7',
        icon: 'mdi-linkedin',
        target: '_blank'
      },
      {
        href: 'http://blog.joonsang.com',
        icon: 'mdi-blogger',
        target: '_blank'
      }
    ],
    internal: [
      {
        to: '/',
        icon: 'mdi-home',
        title: 'Home'
      },
      {
        to: '/portfolio',
        icon: 'mdi-timeline-text-outline',
        title: 'Portfolio'
      }
    ]
  }
})

export const getters = {
  getMenuData(state) {
    return state.menuData
  }
}
