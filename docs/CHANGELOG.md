# Changelog

이 프로젝트의 주요 변경 사항을 기록한다.
형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)를 따르고,
버전은 [Semantic Versioning](https://semver.org/lang/ko/)을 따른다.

## [2.0.2] - 2026-08-03

### Fixed

- **로케일 전환의 query/hash 유실·전환 불능** (Codex 교차 리뷰 R1 #4):
  `AppToolbar.switchLocalePath()`가 fullPath 문자열 치환이라 `/en?x=1`·`/en#foo`
  처럼 프리픽스 바로 뒤에 `?`·`#`이 오면 미치환되어 kr 전환이 되지 않던 문제 —
  `$route.path` 기반 치환 + `{ path, query, hash }` location 객체 반환으로 수정.
- **누락 정적 자산이 index.html 200으로 은폐** (R1 #6): SPA 폴백이 확장자 있는
  요청까지 index.html로 응답하던 것을 404로 수정 (구 Nuxt 서버 동작 보존,
  자산 누락이 모니터링에 드러나도록).
- **404 등 description 없는 라우트로 이동 시 이전 페이지 meta 잔존** (R1 #7):
  라우터 `afterEach`가 기본 description으로 복원하도록 수정.

## [2.0.1] - 2026-07-26

### Changed

- 배포 계정 변경: `jpark` → `debugrammer` (`ecosystem.config.js`의
  스크립트·로그·pid 경로 — 서버 Rocky 8 재설치에 맞춘 계정 정비).

## [2.0.0] - 2026-07-26

### Changed

- **Nuxt 2 SSR → Vue 3 + Vite SPA 전면 마이그레이션** (구조는 admin-web-interface
  마이그레이션과 동일: `spa/` + Express standalone 서버).
  - Vue 2.7(Nuxt 2.15) → Vue 3.5 + Vite 7.3
  - Vuetify 1.x 모듈(@nuxtjs/vuetify) → Vuetify 3 (다크 테마 색상 보존)
  - Vuex → Pinia 3 (스토어 5종, getter 이름 유지)
  - nuxt-i18n → vue-i18n 11 (URL 구조 보존: `/`·`/portfolio`·`/en`·`/en/portfolio`)
  - chart.js 2 + vue-chartjs 3 → chart.js 4 + vue-chartjs 5
  - @nuxtjs/moment → dayjs
  - @nuxtjs/google-analytics → GA4 gtag.js 직접 로드 (G- ID일 때만 주입)
- 서버 엔트리: Nuxt SSR(`server/index.js`) → SPA 정적 서빙(`server/standalone.js`)
  — history 폴백·`/status` 헬스체크·해시 자산 불변 캐시 헤더·디렉토리 리다이렉트
  비활성(`redirect: false` — dist 이미지 폴더와 `/portfolio` 라우트 충돌 방지).
- **Vuetify 2 외형 보존**: `spa/src/styles/vuetify2-compat.css` — vuetify@2.7.2
  vs v3 dist CSS 기계 대조 실측 기반으로 격차 복원 (카드 타이틀/텍스트·컨테이너·
  툴바 패딩, 다크 표면 색 #1E1E1E·푸터 #272727·구분선, outlined 카드 배경,
  타임라인 중앙선 50/50 기하, 테이블 행 높이 48px, p 마진). v-rating 기본색
  (채움 primary·빈별 accent)은 컴포넌트에 명시 복원.
- 배포: `npm run deploy` = npm install + SPA 프로덕션 빌드 + pm2 start
  (PM2 엔트리 `server/standalone.js`로 변경).

### Added

- `CLAUDE.md` — AI 작업 가이드 (아키텍처·패턴·마이그레이션 규칙).
- `docs/` — 작업 일지(WORKLOG.md)·체인지로그(CHANGELOG.md) 관리 시작.
- 404 페이지 라우트 (`NotFound.vue` — 구 error 레이아웃 등가).
- ESLint 9 flat config (루트 서버용·SPA용 분리).

### Removed

- Nuxt 2 코드 전체: `pages/`·`components/`·`layouts/`·`store/`·`locales/`·
  `static/`·`middleware/`·`plugins/`·`nuxt.config.js`·`server/index.js`·
  `.eslintrc.js` (복구: git history, 2.0.0 이전 커밋).

## [1.1.10 이하]

- Nuxt 2 기반 (git history 참조).
