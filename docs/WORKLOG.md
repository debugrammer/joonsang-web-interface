# 작업 일지 (WORKLOG)

> AI 작업 세션 단위 기록. 최신 항목을 맨 위에 추가한다.
> 형식: 날짜 · 작업 내용 · 결정 사항(배경 포함) · 후속 작업(TODO).

---

## 2026-07-26 (3차) — 배포 계정 변경 (2.0.1)

- 서버 Rocky 8 재설치를 계기로 배포 계정을 `jpark` → `debugrammer`로 정비
  (소유자 결정). `ecosystem.config.js`의 `/home/jpark/*` 경로 전부 교체.
- v2.0.0은 이미 릴리즈(태그)됐으므로 규칙대로 패치 버전 2.0.1.
- 서버 쪽 절차(계정 생성·재설치 지침)는 비공개 문서에서 관리 — 공개 저장소에는
  서버 구성 정보를 두지 않는다.

## 2026-07-26 (2차) — Vuetify 2 외형 호환 복원 (2.0.0에 포함, 버전 미변경)

### 작업 내용

- 소유자 피드백: "거의 흡사한데 패딩 등 세세한 부분이 다르다" →
  레퍼런스(admin-web-interface)의 `vuetify2-compat.css` 접근을 그대로 적용.
- **실측 대조**: vuetify@2.7.2 dist CSS를 받아 설치된 v3 dist CSS와 기계 대조,
  이 프로젝트가 쓰는 컴포넌트의 격차만 발췌해 `spa/src/styles/vuetify2-compat.css`
  작성 (카드 타이틀/텍스트·컨테이너·툴바 패딩, 다크 표면 색, 타임라인 기하,
  테이블 행 높이 — 상세는 CHANGELOG 2.0.0의 "Vuetify 2 외형 보존" 항목).
- 테마 surface를 v2 값(#1E1E1E)으로 고정, v-rating 기본색(채움 primary·빈별
  accent) 명시 복원, 툴바 로고의 임시 ml-2 보정 제거(툴바 패딩 복원으로 불필요).
- **이식 오류 수정 (소유자 지적 2건)**: MainParallax 루트를 `v-row no-gutters`로
  잘못 이식해 인용구 영역의 컬럼 패딩 12px이 사라지고 위아래가 붙었던 문제 —
  원본(v-layout row wrap = 거터 있음)대로 `v-row`로 정정, `mx-3`도 원복
  (px-3으로 바꿨던 것 되돌림). 추가로 아래쪽 간격만 안 살아나는 문제는
  v2 `.layout`에 세로 음수 마진이 없던 것(grid-list-xl은 가로 -12px만) 대비
  v3 `v-row`는 -12px 전방향이라 발생 — `mb-0`으로 v2 마진 기하(top -12·bottom 0)
  를 정확히 복원. **v-layout → v-row 이식 시 세로 음수 마진 차이 주의.**
- **버그 수정**: `/portfolio` → `/portfolio/` 301 리다이렉트 (dist 이미지 폴더와
  라우트 경로 충돌) — `express.static`에 `redirect: false`.
- **브라우저 실기동 검증** (Claude in Chrome): 홈(로고·스킬 카드·레이팅·차트·
  About/SkillSet·타임라인)·포트폴리오(커버 이미지·칩)·404 페이지·로케일 전환
  (`/portfolio` ↔ `/en/portfolio`, lang 속성 동기화) 확인.

### 결정 사항

- **버전은 2.0.0 유지** — 아직 릴리즈(푸시 배포) 전이므로 후속 수정도 2.0.0에
  포함한다 (소유자 결정). 릴리즈 후 수정부터 패치 버전을 올린다.
- **격차는 전역 CSS 1곳에서 복원** (페이지 개별 수정 금지) — 레퍼런스와 동일한
  원칙. 근거 없는 추정값 대신 v2 dist CSS 실측값만 사용한다.
- 타임라인은 v2 기하(중앙선 50/50, 구분자 96px)를 grid-template-columns로 재현 —
  v3 justify-auto의 콘텐츠 기반 컬럼 계산은 선 위치가 불안정.

### 후속 작업 (TODO)

- [ ] 배포 후 소유자 육안 확인 (특히 모바일 폭 — xs 뷰는 실기동 미검증).
- (이전 세션 TODO 유지: GA4 ID 교체 등 — 아래 참조)

## 2026-07-26 — Nuxt 2 → Vue 3 + Vite SPA 마이그레이션 (2.0.0)

### 작업 내용

- **레퍼런스 분석**: admin-web-interface(AUTH-4906 마이그레이션 완료본)의 구조를
  분석해 동일한 형태(`spa/` SPA + `server/standalone.js` Express)로 재작성.
- **SPA 스캐폴딩**: Vue 3.5 + Vite 7.3 + Vuetify 3 + Pinia 3 + vue-router 4 +
  vue-i18n 11. `spa/` 독립 package.json (ESM).
- **1:1 이식**:
  - 페이지 2종: `pages/index.vue` → `Home.vue`, `pages/portfolio.vue` → `Portfolio.vue`
  - 레이아웃: `layouts/default.vue` → `DefaultLayout.vue` (중첩 라우트 부모),
    `layouts/error.vue` → `NotFound.vue` (catch-all, 404 전용)
  - 컴포넌트 8종: AppToolbar · AppFab · PageHeader · MainParallax · Skills ·
    About · SkillSet · WorkExperience (Vuetify 2 → 3 문법 변환)
  - Vuex 스토어 5종 → Pinia (동일 getter 이름 유지)
  - 레이더 차트: chart.js 2 mixins → chart.js 4 + vue-chartjs 5 `<Radar>` 컴포넌트
    (옵션 키 변환: `scale`→`scales.r`, `fontColor`→`color`, `legend`→`plugins.legend`)
  - i18n: nuxt-i18n → vue-i18n + `/:locale(en)?` 라우트 (URL 구조 보존:
    `/`·`/portfolio`·`/en`·`/en/portfolio`)
  - 정적 자산: `static/` → `spa/public/`, 로케일: `locales/` → `spa/src/locales/`
- **서버 교체**: Nuxt SSR 엔트리(`server/index.js`) → `server/standalone.js`
  (spa/dist 정적 서빙 + history 폴백 + `/status` 헬스체크 + 캐시 헤더 규칙).
- **Nuxt 2 제거**: pages/ · components/ · layouts/ · store/ · locales/ · static/ ·
  middleware/ · plugins/ · nuxt.config.js · server/index.js · .eslintrc.js.
  복구는 git history (2.0.0 이전).
- **문서**: CLAUDE.md(AI 작업 가이드) 신규 작성, docs/(WORKLOG·CHANGELOG) 신설,
  README.md 갱신.
- **검증**: 루트·SPA ESLint 통과, vite 빌드 성공, standalone 서버 스모크 테스트
  통과 (`/status` ALIVE, `/`·`/portfolio`·`/en/portfolio` 200, 정적 자산 서빙).

### 결정 사항

- **SSR 포기, SPA 채택**: 레퍼런스(admin-web-interface)와 동일한 구조 통일이
  우선 — 개인 포트폴리오라 SSR SEO 이점보다 유지보수 단순함을 택했다.
  meta description·타이틀은 라우터 afterEach로 관리.
- **dayjs 채택** (구 @nuxtjs/moment 대체): 이 프로젝트의 날짜 사용처는
  WorkExperience의 포맷·월 차이 계산뿐이라 moment 대신 경량 dayjs로 충분.
  푸터 연도는 `new Date().getFullYear()`.
- **GA4 gtag 직접 로드**: @nuxtjs/google-analytics(Universal Analytics 기반)는
  UA 종료(2023-07)로 대체 불가. `plugins/gtag.js`가 G- ID일 때만 주입하도록 구현.
- **로케일 코드 'kr' 유지**: BCP 47 표준은 'ko'지만 URL(`/en`)·로케일 파일 키가
  'kr' 기준이라 원본 보존 (변경 시 URL 하위 호환 깨짐).
- **Options API 유지**: 원본 코드와 1:1 대응해 diff 추적이 쉽도록 — 레퍼런스
  프로젝트와 동일한 결정.
- **spa/dist 미커밋**: 레퍼런스는 배포 서버 Node 16 제약으로 dist를 커밋했지만,
  이 프로젝트는 배포 서버에서 직접 빌드(`npm run deploy`)하므로 gitignore 유지.
- **v-text → 보간 전환**: eslint-plugin-vue 10의
  `vue/no-v-text-v-html-on-component` 위반 — 레퍼런스와 동일하게 컴포넌트의
  v-text를 모두 `{{ }}`로 전환.

### 후속 작업 (TODO)

- [x] **GA4 속성 생성 후 app.env의 `googleAnalytics.id`를 `G-...`로 교체** —
  완료 (2026-07-26, production만 교체·development는 UA 유지로 로컬 트래픽 제외).
  배포 후 GA4 실시간 보고서 수집 확인 필요.
- [x] 배포 서버 Node 버전 확인 — dev 배포 성공으로 확인 완료 (2026-07-26).
- [ ] 포트폴리오 데이터에 이 프로젝트 항목 갱신 검토 (현재 'Nuxt.js, Vuetify.js'
  표기 — 콘텐츠는 소유자 결정 사항이라 보존해 둠).
- [ ] 스킬 데이터 현행화 검토 (Nuxt.js 스킬 항목 등 — 소유자 결정 사항).
- [ ] 다음 프로젝트: **nuxt-data-visualizer** 동일 형태 마이그레이션 예정.
