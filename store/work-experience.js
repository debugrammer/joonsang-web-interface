export const state = () => ({
  workExperienceData: [
    {
      start: '2017-07',
      end: '',
      title: '카페24 Web Developer',
      content:
        '- OAuth 2.0 Provider 유지보수<br />1. Spring Boot 프레임워크 버전 1.5.x -> 2.x 업그레이드 - 전체 소스코드 마이그레이션<br />2. Java 버전 10 -> 11 업그레이드<br />3. 토큰 발급 서비스, 저장소 재설계 및 리팩토링 - 전체 토큰 데이터 무중단 마이그레이션<br />4. IP 인증 기능 재설계 및 리팩토링 - 전체 IP 데이터 무중단 마이그레이션<br /><br />- 관제 서비스 유지보수<br />1. Vuetify.js 버전 1.5.x -> 2.x 업그레이드 - 전체 소스코드 마이그레이션<br />2. Node.js 어플리케이션 환경변수 암호화 모듈 개발 및 적용 - AES 256 암호화<br />3. 캐시 시스템 고도화 - Redis, Infinispan<br /><br />- 관제 서비스 구축<br />1. Graylog에 수집된 각 Cafe24 서비스들의 API 로그를 Graylog REST API를 이용하여 시각화 인터페이스 구축<br />2. 서비스를 API 시스템과 웹 인터페이스 시스템으로 분리하여 설계 - L7 로드밸런서를 통해 분배, 무중단 배포<br />3. 웹 인터페이스 시스템 - Nuxt.js SSR 모드와 Vuetify.js를 이용해 프론트엔드 구현<br />4. API 시스템 - Java 11과 Spring Boot 2로 구현<br />5. 프론트엔트와 백엔드간 민감정보 전송 시 AES 256 알고리즘으로 데이터 암호화하여 통신<br /><br />- 관제 시스템 구축<br />1. 각 쇼핑몰 서버에서 Cafe24 API 로그를 중앙 로그 수집 시스템인 Graylog에 UDP GELF 형식으로 전송하여 수집하도록 설계<br />2. API 분석/연구에 용이하도록 로그 데이터 디자인<br />3. Graylog 웹 인터페이스에 Cafe24 API 위기관리 대시보드 디자인<br /><br />- 쇼핑몰 솔루션 프레임워크 유지보수<br />1. 몰프론트 서버에만 적용되어 있던 DB 리플리케이션을 어드민 서버에도 적용하기 위해 프레임워크 DB커넥션 핸들러와 모델 개선<br />2. 레거시 프레임워크에 Composer를 셋업하여 PSR-4 방식으로 오토로드 가능하도록 개선<br />3. JSON Request Body를 프레임워크 단에서 핸들링할 수 있도록 개선<br /><br />- 쇼핑몰 솔루션 프로젝트<br />1. EC GLOBAL - 쇼핑몰 Admin 주문영역 개발<br />2. 레거시 연동택배 모듈을 전체 재설계하여 리팩토링<br />3. Cafe24 API 초기 투입 개발자 중 한 명으로, 쇼핑몰 주문관련 RESTful API 개발'
    },
    {
      start: '2017-04',
      end: '2017-06',
      title: '아이젠에이치케이 (Gshopper Korea) Engineer Supervisor',
      content:
        '1. Laravel PHP 프레임워크 기반 웹 쇼핑몰 개발<br />2. Ubuntu 서버 기반에서 Nginx와 MySQL 설치 및 관리<br />3. 물류시스템 연동 API 개발<br />4. 안드로이드 쇼핑몰 앱 개발'
    },
    {
      start: '2016-07',
      end: '2017-04',
      title: '로켓크루 Software Developer',
      content:
        '1. 스타트업 멤버<br />2. 안드로이드 앱 개발 - RESTful 서비스로 웹 서버와 통신<br />3. 웹 사이트 개발 - CodeIgniter PHP 프레임워크 기반<br />4. CentOS 서버 기반에서 Apache와 MySQL 설치 및 관리'
    },
    {
      start: '2015-12',
      end: '2016-12',
      title: 'Ward/Kraft Inc. Web Developer',
      content:
        '- 웹 개발<br />1. WordPress 기반 웹사이트와 WooCommerce 웹 쇼핑몰 개발<br />2. Magento E-commerce 웹사이트 유지보수<br />3. Laravel PHP 프레임워크 기반 웹사이트 개발<br />4. Shopify 웹 쇼핑몰 개발<br />5. RHEL 서버 기반에서 Apache/Nginx, MySQL/MariaDB 설치 및 관리<br /><br />- 웹사이트 관리<br />1. 배송, 세금 계산, Payment Gateway 설정 및 관리<br />2. 올바른 HTML5와 CSS3에 기반한 상품 상세설명 추가/수정 및 블로그 포스팅<br />3. 구글 콘솔과 MOZ.com을 이용한 웹사이트 SEO<br /><br />- 소프트웨어 개발<br />1. 대량의 엑셀 데이터 값을 간단하게 웹 업로드 포맷으로 바꿔주는 Java 소프트웨어 개발'
    },
    {
      start: '2011-02',
      end: '2013-02',
      title: '공군 제3훈련비행단 정보체계운영반 개발병',
      content:
        '- 공군 인트라넷 개발<br />1. 인트라넷 최적화 - 더 이상 쓰이지 않거나 쓸모없는 파일 삭제, 코드 및 DB 쿼리 튜닝<br />2. 페이지 로딩 속도 개선 - 서버 메모리 낭비를 막기 위한 메모리 관리<br /><br />- 웹 개발<br />1. EJB (Enterprise Java Bean) 기반의 인트라넷 포털 유지보수<br />2. JSP, PHP, HTML, JavaScript, Ajax, 플래시 액션스크립트를 이용한 인트라넷 웹페이지 개발<br />3. AIX 서버 기반에서 OC4J와 Apache 웹 서버 설치 및 관리<br />4. 오라클 데이터베이스 쿼리 디자인 및 튜닝<br />5. 웹 서버, 데이터베이스 서버, 방화벽, 암호장비, UPS, 항온항습기 관리<br /><br />- 소프트웨어 개발<br />1. 정기적으로 서버 패스워드를 재생성하기 위한 Java 소프트웨어 개발<br />2. Visual C++로 번호판 인식 기술 및 오라클 데이터베이스와 통신하는 민간인 출입통제시스템 개발'
    }
  ]
})

export const getters = {
  getWorkExperienceData(state) {
    return state.workExperienceData
  }
}
