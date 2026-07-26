# [Joonsang.com](http://joonsang.com)
> Vue 3와 Vite, 구글 머티리얼 디자인 컴포넌트 프레임워크인 Vuetify로 제작한 개인 포트폴리오 웹사이트입니다.
> (2.0.0에서 Nuxt 2 SSR → Vue 3 SPA로 마이그레이션 — 자세한 내용은 `docs/CHANGELOG.md` 참조)

## 프로젝트 구성
* `spa/` — Vue 3 + Vite SPA (프론트엔드, 독립 package.json)
* `server/` — Express standalone 서버 (SPA 정적 서빙 + `/status` 헬스체크)
* `docs/` — 작업 일지(WORKLOG.md) · 체인지로그(CHANGELOG.md)

## 실행방법
실행을 위해 먼저 환경설정 파일을 생성해야 합니다.

* 로컬 환경설정 파일: `app.env.development.json`
* 프로덕션 환경설정 파일: `app.env.production.json`

프로젝트 디렉토리 루트에 있는 `app.env.sample.json` 파일을 참고하여 아래와 같이 작성하시면 됩니다.
``` json
{
  "server": {
    "port": 3000,
    "host": "0.0.0.0"
  },

  "googleAnalytics": {
    "id": "Your GA4 Measurement ID (G-...)"
  }
}
```

## 프로젝트 빌드
``` bash
# 디펜던시 라이브러리 인스톨
$ npm install

# 로컬 실행 (SPA 빌드 + standalone 서버, http://127.0.0.1:3000)
$ npm run dev

# 배포 (요구사항: Node 20.19+ / 22.12+)
$ pm2 delete joonsang-web
$ npm run deploy
```

## 사용 프레임워크
* [Vue.js](https://vuejs.org)
* [Vite](https://vite.dev)
* [Vuetify](https://vuetifyjs.com)
* [Express](https://expressjs.com)

## 라이센스
* [MIT](https://github.com/debugrammer/joonsang-web-interface/blob/master/LICENSE)
