# [Joonsang.com](http://joonsang.com)
Vue.js 프레임워크인 Nuxt.js와 구글 머티리얼 디자인 컴포넌트 프레임워크인 Vuetify.js로 제작한 개인 포트폴리오 웹사이트입니다.

## Instruction
실행을 위해 먼저 환경설정 파일을 생성해야 합니다.

* 로컬 환경설정 파일: `app.env.dev.json`
* 프로덕션 환경설정 파일: `app.env.production.json`

프로젝트 디렉토리 루트에 있는 `app.env.sample.json` 파일을 참고하여 아래와 같이 작성하시면 됩니다.
``` json
{
  "server": {
    "port": 3000,
    "host": "0.0.0.0"
  },

  "googleAnalytics": {
    "id": "Your Google Analytics Tracking ID"
  }
}
```

## Build Setup
``` bash
# 디펜던시 라이브러리 인스톨
$ npm install

# 로컬 개발서버
$ npm run dev

# 배포
$ pm2 delete joonsang-web
$ npm run deploy
```

## References
* [Vuetify.js](https://vuetifyjs.com)
* [Nuxt.js](https://nuxtjs.org)
* [Vue.js](https://vuejs.org)

## License
[MIT](https://github.com/debugrammer/joonsang-web-interface/blob/master/LICENSE)
