export const state = () => ({
  skillsData: [
    [
      {
        name: 'JAVA',
        imgSrc: '/logo/java.png',
        level: 8,
        description:
          '자바(Java)는 썬 마이크로시스템즈의 제임스 고슬링(James Gosling)과 다른 연구원들이 개발한 객체 지향적 프로그래밍 언어이며, 썬 마이크로시스템즈에서 무료로 제공하고 있다. 현재 웹 애플리케이션 개발에 가장 많이 사용하는 언어 가운데 하나이고, 모바일 기기용 소프트웨어 개발에도 널리 사용하고 있다.'
      },
      {
        name: 'PHP',
        imgSrc: '/logo/php.png',
        level: 6,
        description:
          '웹 서핑을 하다보면 PHP로 구현된 서버사이드 소프트웨어를 많이 찾을 수 있다. PHP를 바탕으로 하는 프로그램 중 대표적인 예로 블로깅 도구 워드프레스와 위키백과를 구동시키는 미디어위키를 들 수 있다. 대한민국에서는 대표적으로 카페24 쇼핑몰 솔루션이 PHP 기반으로 개발되었으며, BBS로는 제로보드, 그누보드, XpressEngine 등이 있다.'
      },
      {
        name: 'JavaScript',
        imgSrc: '/logo/js.png',
        level: 7,
        description:
          'HTML 문서의 정적이고 단조로운 한계를 극복하기 위해 넷스케이프(Netscape)사가 만든 livescript가 그 이름을 달리 한 것으로서 브라우저 자체에 내장된 해석기능을 이용한 클라이언트(client) 기반의 일종의 스크립트 언어이다. 작고도 빠르기 때문에 웹문서를 동적으로 꾸밀 때 가장 널리 쓰인다.'
      }
    ],
    [
      {
        name: 'Spring Boot',
        imgSrc: '/logo/spring_boot.png',
        level: 8,
        description:
          '스프링 프로젝트의 일부로, 스프링 어플리케이션 초기 구성 및 기동을 간소화하고 stand-alone 웹서버 기능을 포함하고 있다. 마이크로서비스 아키텍쳐(microservice architecture)를 구성할 때 활용이 권장된다.'
      },
      {
        name: 'Nuxt.js',
        imgSrc: '/logo/nuxt.png',
        level: 7,
        description:
          'Nuxt.js는 무료 오픈소스 웹 어플리케이션 프레임워크로, Vue.js, Node.js, Webpack과 Babel.js에 기반하고 있다. 서버사이드 렌더링(SSR)을 지원하여 웹브라우저에서 더 빠르게 웹사이트를 로딩할 수 있도록 해주며, 검색엔진 최적화(SEO)에도 유리하다.'
      },
      {
        name: 'Vue.js',
        imgSrc: '/logo/vue.png',
        level: 6,
        description:
          '자바스크립트 프레임워크 진영은 크게 AngularJS, React, 그리고 Vue.js로 나누어져 있다. Vue.js는 유저 인터페이스와 싱글 페이지 어플리케이션(single-page application)을 구축하기 위한 오픈소스 자바스크립트 프레임워크로, 구글에서 AngularJS 프로젝트를 진행하던 Evan You에 의해 2014년에 만들어졌다.'
      }
    ]
  ]
})

export const getters = {
  getSkillsData(state) {
    return state.skillsData
  }
}
