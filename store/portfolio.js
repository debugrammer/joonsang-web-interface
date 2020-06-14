export const state = () => ({
  portfolioData: [
    {
      imgSrc: '/portfolio/graylog.png',
      title: 'portfolio.portfolio.graylogSdkSpringBoot.title',
      period: 'Nov 2019 – Present',
      environments: ['Spring Boot'],
      description: 'portfolio.portfolio.graylogSdkSpringBoot.description',
      links: [
        {
          icon: 'mdi-github',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/graylog-sdk-spring-boot'
        }
      ]
    },
    {
      imgSrc: '/portfolio/graylog.png',
      title: 'portfolio.portfolio.graylogQueryBuilder.title',
      period: 'Oct 2019 – Present',
      environments: ['Java', 'JavaScript', 'PHP'],
      description: 'portfolio.portfolio.graylogQueryBuilder.description',
      links: [
        {
          icon: 'mdi-github',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/graylog-query-builder'
        }
      ]
    },
    {
      imgSrc: '/portfolio/joonsang.png',
      title: 'portfolio.portfolio.joonsang.title',
      period: 'Aug 2019 – Present',
      environments: ['Nuxt.js', 'Vuetify.js'],
      description: 'portfolio.portfolio.joonsang.description',
      links: [
        {
          icon: 'mdi-github',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/joonsang-web-interface'
        }
      ]
    },
    {
      imgSrc: '/portfolio/gshopper.png',
      title: 'portfolio.portfolio.gShopperApp.title',
      period: 'Apr 2017 – Jun 2017',
      environments: ['Laravel', 'Android'],
      description: 'portfolio.portfolio.gShopperApp.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'https://store.gshopper.com/kr'
        }
      ]
    },
    {
      imgSrc: '/portfolio/rocketmms.png',
      title: 'portfolio.portfolio.rocketMms.title',
      period: 'Jul 2016 – Apr 2017',
      environments: ['CodeIgniter', 'Android'],
      description: 'portfolio.portfolio.rocketMms.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'http://www.rocketmms.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/velocity_tactics.png',
      title: 'portfolio.portfolio.velocityTactics.title',
      period: 'Mar 2016 – Sep 2016',
      environments: ['Shopify'],
      description: 'portfolio.portfolio.velocityTactics.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'https://www.velocitytactics.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/my1stop.png',
      title: 'portfolio.portfolio.my1Stop.title',
      period: 'Jul 2016 – Aug 2016',
      environments: ['Magento'],
      description: 'portfolio.portfolio.my1Stop.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'http://www.my1stop.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/kw_cattle.png',
      title: 'portfolio.portfolio.kwCattle.title',
      period: 'Jan 2016 – Mar 2016',
      environments: ['WordPress'],
      description: 'portfolio.portfolio.kwCattle.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'http://www.kwcattle.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/journey_through_europe.png',
      title: 'portfolio.portfolio.journeyThroughEurope.title',
      period: 'Sep 2014 – Dec 2014',
      environments: ['Java', 'JavaFX'],
      description: 'portfolio.portfolio.journeyThroughEurope.description',
      links: [
        {
          icon: 'mdi-youtube',
          name: 'Demo Clip',
          url: 'https://youtu.be/MUq8VPt0QeI'
        }
      ]
    },
    {
      imgSrc: '/portfolio/yonabang.png',
      title: 'portfolio.portfolio.yonabang.title',
      period: 'Jun 2014 – Aug 2014',
      environments: ['Java EE'],
      description: 'portfolio.portfolio.yonabang.description',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'http://www.yonabang.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/order_sheet_generator.png',
      title: 'portfolio.portfolio.standardOrderSheetGenerator.title',
      period: 'Jun 2013 – Jun 2013',
      environments: ['Java'],
      description:
        'portfolio.portfolio.standardOrderSheetGenerator.description',
      links: [
        {
          icon: 'mdi-youtube',
          name: 'Demo Clip',
          url: 'https://youtu.be/fIUgkoew90M'
        }
      ]
    },
    {
      imgSrc: '/portfolio/license_plate_recognizer.png',
      title: 'portfolio.portfolio.civilianAccessControlSystem.title',
      period: 'Jun 2012 – Dec 2012',
      environments: ['Visual C++', 'OpenCV'],
      description:
        'portfolio.portfolio.civilianAccessControlSystem.description',
      links: [
        {
          icon: 'mdi-youtube',
          name: 'Demo Clip',
          url: 'https://youtu.be/_cmQm-X0-q4'
        }
      ]
    }
  ]
})

export const getters = {
  getPortfolioData(state) {
    return state.portfolioData
  }
}
