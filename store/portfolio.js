export const state = () => ({
  portfolioData: [
    {
      imgSrc: '/portfolio/graylog.png',
      title: 'Graylog SDK Spring Boot',
      period: 'Nov 2019 –',
      environments: ['Spring Boot'],
      description:
        'Graylog REST API를 구현한 Graylog SDK의 Spring Boot Starter입니다. Graylog REST API를 이용해 데이터 시각화 소프트웨어를 개발할 때, Graylog의 요청/응답 스펙에 신경쓸 필요없이 바로 소프트웨어 개발에 집중할 수 있도록 도와줍니다. Graylog Query Builder와 조합하여 더욱 시너지를 낼 수 있습니다. 현재 Maven Central에서 서비스 중입니다.',
      links: [
        {
          icon: 'mdi-github-circle',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/graylog-sdk-spring-boot'
        }
      ]
    },
    {
      imgSrc: '/portfolio/graylog.png',
      title: 'Graylog Query Builder',
      period: 'Oct 2019 –',
      environments: ['Java', 'JavaScript', 'PHP'],
      description:
        '로그 수집 & 분석 툴인 Graylog의 검색 쿼리 빌더입니다. Graylog REST API를 이용하여 개발할 때 여러 조건에 따라 쿼리가 더해지거나 변경될 수 있는데, 쿼리 빌더를 이용하여 우아하게 조건별 검색 쿼리를 만들 수 있습니다. Java, JavaScript, PHP 3가지 버전으로 개발하여 각각 Maven Central, NPM, Packagist에서 서비스 중입니다.',
      links: [
        {
          icon: 'mdi-github-circle',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/graylog-query-builder'
        }
      ]
    },
    {
      imgSrc: '/portfolio/joonsang.png',
      title: 'Joonsang.com',
      period: 'Aug 2019 –',
      environments: ['Nuxt.js', 'Vuetify.js'],
      description:
        '웹 개발자인 본인의 웹사이트 재구축 프로젝트입니다. 워드프레스 기반으로 작성했던 기존의 웹사이트를 Vue.js 프레임워크인 Nuxt.js를 사용하여 완전히 새롭게 개발했습니다. 구글 머티리얼 디자인 컴포넌트 프레임워크인 Vuetify.js로 웹사이트 디자인까지 직접 작업하였습니다.',
      links: [
        {
          icon: 'mdi-github-circle',
          name: 'GitHub Repository',
          url: 'https://github.com/debugrammer/joonsang-web-interface'
        }
      ]
    },
    {
      imgSrc: '/portfolio/gshopper.png',
      title: 'Gshopper App',
      period: 'Apr 2017 – Jun 2017',
      environments: ['Laravel', 'Android'],
      description:
        'Gshopper 안드로이드 앱과 모바일 웹사이트 개발 프로젝트입니다. 앱은 네이티브 웹 뷰로 개발하였으며, 첫 실행 시 인트로 슬라이드와 마케팅, 주문상태 관련 푸시 메시지를 제공합니다. 웹사이트는 Laravel PHP 프레임워크 기반으로 제작하였으며, 중국 본사 개발팀과 함께 물류 시스템 연동 API 개발을 진행하였습니다.',
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
      title: '로켓문자',
      period: 'Jul 2016 – Apr 2017',
      environments: ['CodeIgniter', 'Android'],
      description:
        '로켓문자 안드로이드 앱과 웹사이트 개발 프로젝트입니다. 앱은 사용자의 설정에 따라 MMS를 자동으로 발송하는 기능을 가지고 있고 웹 서버와 RESTful 서비스로 통신하도록 구현되었습니다. 웹사이트는 CodeIgniter PHP 프레임워크 기반으로 제작하였습니다.',
      links: [
        {
          icon: 'mdi-web',
          name: 'Website Link',
          url: 'http://www.rocketmms.com'
        }
      ]
    },
    {
      imgSrc: '/portfolio/my1stop.png',
      title: 'My1Stop',
      period: 'Jul 2016 – Aug 2016',
      environments: ['Magento'],
      description:
        'Ward Kraft의 계열사 홈페이지로 데이터베이스 마이그레이션을 진행하였고, 주문확인 메일이 발송 안 되는 오류, 가끔씩 마젠토 오류와 함께 웹사이트가 다운되는 현상, 익스텐션 간 충돌, 등의 오류 수정 및 안정화 작업, 그리고 마젠토 업데이트 작업을 하였습니다.',
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
      title: 'KW Cattle',
      period: 'Jan 2016 – Mar 2016',
      environments: ['WordPress'],
      description:
        'Ward Kraft의 계열사 홈페이지로 웹사이트 리뉴얼 작업의 일환으로 프론트엔드와 백엔드 오류를 수정하고 사이트 디자인 변경을 하였습니다. 그 외에도 플러그인 수정 및 커스터마이징 작업을 하였는데, 대표적으로 데이터 테이블과 비디오 갤러리가 있었습니다.',
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
      title: 'Journey Through Europe',
      period: 'Sep 2014 – Dec 2014',
      environments: ['Java', 'JavaFX'],
      description:
        'Java 개인 프로젝트 수업에서 개발한 브루마블과 비슷한 느낌의 보드게임입니다. 시작할 때 주어진 카드의 도시를 먼저 모두 방문한 플레이어가 우승하는 게임이며 도보, 해상, 비행으로 이동할 수 있고 특정 도시에 방문하면 동작하는 찬스도 구현하였습니다. CPU AI는 Dijkstra 알고리즘으로 동작합니다.',
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
      title: '연아방 (연세대학교 치과대학 커뮤니티)',
      period: 'Jun 2014 – Aug 2014',
      environments: ['Java EE'],
      description:
        '연세대학교 치과대학 커뮤니티 웹사이트의 리뉴얼을 위해 아웃소싱 작업한 프로젝트입니다. 웹사이트 안정화 및 버그 수정, 메뉴 및 게시판 개편, 그리고 PHP 기반의 연세대학교 치과대학 동문회 웹사이트와의 게시판 통합 작업을 하였습니다.',
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
      title: '(주)인터파크인터내셔널 표준 발주서 생성기',
      period: 'Jun 2013 – Jun 2013',
      environments: ['Java'],
      description:
        '인터파크인터내셔널 관리팀에서 사용하기 위해 아웃소싱 작업한 프로그램입니다. 여러 오픈마켓에서 들어온 주문서를 하나의 엑셀 파일로 합친 뒤, 인터파크인터내셔널의 상품코드표와 함께 돌리면 각 상품코드를 매칭해서 인터파크인터내셔널의 표준 발주서 양식으로 변환해주는 기능을 갖고 있습니다. 상품코드표 정렬에는 Heap Sort, 검색에는 Binary Search 알고리즘을 사용합니다.',
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
      title: '민간인 출입통제 시스템',
      period: 'Jun 2012 – Dec 2012',
      environments: ['Visual C++', 'OpenCV'],
      description:
        '민간인 출입관리 대장을 수기로 작성하여 관리하던 것을 자동화하기 위해 개발한 시스템입니다. Visual C++와 OpenCV로 차량번호판 인식 기능을 구현하였으며 오라클 데이터베이스와 통신하며 출입 허가여부 조회 및 출입시각 기록을 하고, IP 캠과 차량차단기 개폐 기능을 지원합니다.',
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
