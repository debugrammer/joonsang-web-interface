export const state = () => ({
  menuData: {
    external: [
      {
        href: 'https://www.linkedin.com/in/iowa7',
        icon: 'fab fa-linkedin',
        target: '_blank'
      },
      {
        href: 'http://blog.joonsang.com',
        icon: 'fas fa-blog',
        target: '_blank'
      }
    ],
    internal: [
      {
        to: '/',
        icon: 'home',
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
