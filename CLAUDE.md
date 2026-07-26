# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

Joonsang.com — 웹 개발자 박준상(debugrammer)의 개인 포트폴리오 웹사이트.
Vue 3 + Vite SPA(`spa/`)와 Express standalone 서버(`server/standalone.js`)로 구성됨.

2.0.0에서 Nuxt 2 SSR → Vue 3 SPA 마이그레이션을 완료했다 (admin-web-interface의
AUTH-4906 마이그레이션과 동일한 구조). 구 Nuxt 2 코드는 git history에 있다
(2.0.0 이전 커밋).

**중요:** 이 프로젝트의 원본 코드는 모두 소유자가 직접 작성했다. AI 작업 시
기존 화면·콘텐츠·URL 구조를 임의로 바꾸지 말고 1:1 보존을 기본으로 한다.
콘텐츠(경력·스킬·포트폴리오 데이터) 변경은 소유자 결정 사항이다.

## 서비스 구조

- **정적 콘텐츠 SPA** — 백엔드 API 없음. 모든 데이터(메뉴·스킬·경력·포트폴리오)는
  Pinia 스토어에 하드코딩된 정적 데이터다.
- **Express standalone 서버** — `spa/dist` 정적 서빙 + vue-router history 모드
  폴백(비-API GET → index.html) + `/status` 헬스체크만 담당한다.
- **i18n** — 한국어(kr, 기본)·영어(en). URL 구조: `/`·`/portfolio`(kr),
  `/en`·`/en/portfolio`(en). nuxt-i18n의 prefix_except_default 전략을
  vue-router `/:locale(en)?` 옵셔널 파라미터로 보존했다.

## 개발 명령어

```bash
# 로컬 실행 (포트 3000, 프로세스 1개) — SPA 빌드 후 standalone 서버 기동
npm install
npm run dev
# = spa-build-dev(spa install + vite build) 후
#   NODE_ENV=development nodemon server/standalone.js --watch server
# 접속: http://127.0.0.1:3000

# HMR 없음: 프론트 코드 수정 시 npm run spa-build-dev 재실행 후 브라우저 새로고침.
# 서버 코드(server/)는 nodemon이 자동 재기동한다.

# 게이트 (커밋 전 3종)
npx eslint server ecosystem.config.js eslint.config.js   # 서버 정적 분석
npm --prefix spa run lint                                # SPA 정적 분석
npm --prefix spa run build-dev                           # SPA 빌드 검증

# 배포 (서버에서 실행 — 서버 Node가 vite 빌드 가능해야 함: Node 20.19+/22.12+)
pm2 delete joonsang-web
git pull
npm run deploy
# = npm install + spa-build-prod + pm2 start (ecosystem.config.js, NODE_ENV=production)
```

**사용 가능한 프로파일:** development, production

## 기술 스택

| 분류        | 기술                                                        |
|-----------|-----------------------------------------------------------|
| **프레임워크** | Vue 3.5 (SPA, `spa/`) + Vite 7.3                          |
| **UI**    | Vuetify 3 (다크 테마), Material Design Icons (@mdi/font)      |
| **상태 관리** | Pinia 3 (정적 데이터 스토어 5종)                                  |
| **라우팅**   | vue-router 4 (명시 라우트 + 로케일 프리픽스)                        |
| **i18n**  | vue-i18n 11 (`legacy: false` + `globalInjection` — 템플릿 `$t` 사용) |
| **차트**    | chart.js 4 + vue-chartjs 5 (레이더 차트)                       |
| **날짜**    | dayjs (구 @nuxtjs/moment 대체 — 포맷·월 차이 계산만 필요)            |
| **서버**    | Express.js 4 (`server/standalone.js` — SPA 정적 서빙 전용)      |
| **분석**    | Google Analytics 4 gtag.js 직접 로드 (`spa/src/plugins/gtag.js`) |
| **로깅**    | consola                                                    |

## 환경 설정

### 설정 파일

- 환경 설정 파일: `app.env.{development,production}.json` — **gitignore 대상**
  (샘플: `app.env.sample.json`). 새 환경 구축 시 샘플을 복사해 작성한다.
- 서버: `server/config.js`가 `NODE_ENV` 값에 따라 해당 설정 파일을 로드한다.
- SPA: `spa/vite.config.js`가 `APP_PROFILE`에 따라 클라이언트 노출 값만 골라
  `__APP_ENV__` define으로 번들에 인라인한다. 접근은 `spa/src/env.js`를 통한다.
- **프로파일 전달**: 서버(Express)는 `NODE_ENV`, SPA(Vite)는 `APP_PROFILE`로
  전달한다 (Vite는 `NODE_ENV`를 production 판정에 쓰므로 분리 — vite.config.js 주석 참조).

### 설정 구조

```javascript
{
  "server": { "port": 3000, "host": "0.0.0.0" },
  "googleAnalytics": { "id": "G-..." }   // GA4 측정 ID
}
```

### 클라이언트 환경 값 (`spa/src/env.js` — `__APP_ENV__` 주입)

`GOOGLE_ANALYTICS_ID`, `PROFILE`, `BUILD_VERSION`(spa/package.json 버전)

### Google Analytics 주의

구 Universal Analytics(`UA-...`) ID는 2023-07 서비스 종료로 수집되지 않는다.
`spa/src/plugins/gtag.js`는 **GA4 측정 ID(`G-...`)일 때만** gtag를 주입하고
UA ID·플레이스홀더면 건너뛴다(콘솔 경고). SPA 라우팅 중복 집계를 피하려고
초기 `page_view`는 끄고 라우터 `afterEach`에서 발송한다.
→ **GA4 속성 생성 후 app.env의 id 교체 필요** (docs/WORKLOG.md 후속 작업 참조).

## 아키텍처

### 디렉토리 구조

```
joonsang-web-interface/
├── server/                     # Express 서버 (CommonJS)
│   ├── standalone.js          # 운영 엔트리 — SPA 정적 서빙 + /status (PM2 대상)
│   └── config.js              # 서버 설정 로더 (app.env → env)
├── spa/                        # Vue 3 + Vite SPA (독립 package.json, ESM)
│   ├── src/
│   │   ├── pages/             # Home.vue · Portfolio.vue · NotFound.vue
│   │   ├── stores/            # Pinia 정적 데이터 스토어 5종
│   │   │                      #   menu · skills · skill-sets · work-experience · portfolio
│   │   ├── components/        # AppToolbar · AppFab · PageHeader · MainParallax ·
│   │   │   │                  #   Skills · About · SkillSet · WorkExperience
│   │   │   └── widgets/chart/RadarChart.vue
│   │   ├── layouts/DefaultLayout.vue  # 툴바 + 푸터 + FAB (중첩 라우트 부모)
│   │   ├── router/index.js    # 명시 라우트 + 로케일 동기화 + 타이틀 관리
│   │   ├── i18n/index.js      # vue-i18n 구성 (kr 기본·en)
│   │   ├── locales/           # kr.json · en.json (구 locales/ 이동)
│   │   ├── plugins/gtag.js    # GA4 로더
│   │   ├── styles/vuetify2-compat.css  # Vuetify 2 외형 호환 (dist CSS 실측 대조)
│   │   ├── env.js             # __APP_ENV__ 접근자
│   │   ├── main.js            # 앱 부트스트랩 (Pinia·router·i18n·Vuetify·테마)
│   │   └── App.vue
│   ├── public/                # 정적 자산 (구 static/ 이동 — favicon·logo·portfolio·error)
│   ├── dist/                  # 빌드 산출물 (gitignore)
│   ├── index.html             # SPA 엔트리 (폰트 로드·다크 배경·기본 meta)
│   ├── vite.config.js         # 빌드·환경 주입 설정
│   ├── eslint.config.js       # eslint 9 flat + vue3 권장
│   └── package.json
├── docs/                       # 작업 관리 문서 (git 추적)
│   ├── WORKLOG.md             # 작업 일지 — 세션 단위 기록
│   └── CHANGELOG.md           # 체인지로그 — 버전 단위 기록
├── ecosystem.config.js         # PM2 배포 설정 (NODE_ENV=production)
├── eslint.config.js            # 루트(서버) ESLint
├── app.env.sample.json         # 환경 설정 샘플
└── package.json                # 루트(서버 런타임 의존성·빌드/배포 스크립트)
```

### Nuxt 2 → Vue 3 매핑 (마이그레이션 규칙)

| Nuxt 2 원본                        | 현재                                             |
|----------------------------------|------------------------------------------------|
| `pages/index.vue`·`portfolio.vue` | `spa/src/pages/Home.vue`·`Portfolio.vue`       |
| `layouts/default.vue`            | `spa/src/layouts/DefaultLayout.vue` (중첩 라우트) |
| `layouts/error.vue` (404)        | `spa/src/pages/NotFound.vue` (catch-all 라우트)  |
| `store/*` (Vuex)                 | `spa/src/stores/*` (Pinia — 동일 getter 이름 유지) |
| `nuxt-i18n`                      | vue-i18n + `/:locale(en)?` 라우트 파라미터          |
| `head()` 타이틀/메타                | 라우트 `meta.title`/`meta.description` + `afterEach` |
| `$moment`                        | dayjs (WorkExperience) · `new Date()` (푸터 연도)  |
| `@nuxtjs/google-analytics`       | `plugins/gtag.js` (GA4)                        |
| `<client-only>`                  | 제거 (SPA — SSR 없음)                             |
| `~/components/...`               | 상대 경로 import + `.vue` 확장자 명시                |

## Pinia 스토어 패턴

Vuex 모듈을 1:1 이식한 정적 데이터 스토어 — 액션 없음, state + getters만:

```javascript
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({ menuData: { ... } }),
  getters: {
    getMenuData: (state) => state.menuData
  }
})
```

컴포넌트 연결은 Options API + Pinia 매핑 헬퍼(원본과 1:1 대응 — diff 추적 용이):

```javascript
import { mapState } from 'pinia'
import { useMenuStore } from '../stores/menu.js'

computed: {
  ...mapState(useMenuStore, { menu: 'getMenuData' })
}
```

## i18n / 로케일 라우팅 규칙

- 로케일 코드는 원본의 **'kr'/'en'을 그대로 보존**한다 (URL 프리픽스·로케일 파일
  키와 1:1). BCP 47 'ko'로 바꾸지 말 것 — URL·로케일 파일과 전부 어긋난다.
- 라우트는 `/:locale(en)?` 부모 아래 children으로 정의 — 기본 로케일(kr)은
  프리픽스 없음, en만 `/en` 프리픽스 (nuxt-i18n prefix_except_default 등가).
- 라우터 `beforeEach`가 URL 파라미터를 vue-i18n 로케일에 동기화하고
  `document.documentElement.lang`(ko/en)을 갱신한다.
- 로케일 전환 링크는 `AppToolbar.switchLocalePath()` — 현재 경로의 프리픽스만
  교체한다. 내부 메뉴 링크는 `AppToolbar.path()`가 현재 로케일 프리픽스를 붙인다.
- 번역 키 구조: `{페이지}.{섹션}.{항목}` (예: `index.skills.java.description`) —
  스토어 데이터는 번역 키 문자열을 담고 컴포넌트에서 `$t()`로 해석한다.
- **새 페이지 추가 시**: 라우트를 `/:locale(en)?` children에 추가 + `meta.title`/
  `meta.description` 지정 + kr/en 로케일 파일에 번역 키 추가.

## UI/UX 패턴

원본 Nuxt 페이지를 1:1 이식했으므로 화면 구조는 그대로다. 문법만 Vuetify 3 기준이다.

- **테마**: 다크 고정 (`defaultTheme: 'dark'`) — 색상은 nuxt.config.js 원본 보존
  (primary #ff7597 · accent #ff0266 · secondary #2a2a2a 등, `spa/src/main.js`).
  surface(#1E1E1E)·background(#121212)는 v2 다크 표면값으로 고정했다.
- **Vuetify 2 외형 호환 CSS** (`spa/src/styles/vuetify2-compat.css`):
  v2↔v3 기본값 격차(카드 타이틀 패딩·줄바꿈, 컨테이너 패딩 12px, 툴바 패딩,
  타임라인 50/50 기하, 다크 표면·구분선 색, 테이블 행 높이 등)는 **페이지 개별
  수정이 아니라 이 파일에서 전역 복원**한다. 모든 값은 vuetify@2.7.2 vs 설치
  v3 dist CSS 기계 대조 실측 기반 — 새 격차 발견 시 같은 방식으로 실측 후 추가.
- **Vuetify 2 → 3 주요 변환** (새 코드도 이 기준을 따른다):
  - `v-layout`/`v-flex xs12 lg4` → `v-row`/`v-col cols="12" lg="4"`
  - `outlined`·`text` props → `variant="outlined"`·`variant="text"`
  - `small`/`dense` → `size="small"`/`density="compact"`
  - 타이포 클래스: `headline`→`text-h5`, `subtitle-1`→`text-subtitle-1`,
    `overline`→`text-overline`, `body-1`→`text-body-1`
  - 색 클래스: `white--text`→`text-white`, `primary--text`→`text-primary`
  - `v-list-item-content/-icon/-avatar` → `#prepend`/`#append` 슬롯 또는 일반 요소
  - `$vuetify.breakpoint.*` → `$vuetify.display.*` (`xsOnly`→`xs`)
  - `v-simple-table` → `v-table`, `v-icon left` → `v-icon start`
  - v-menu activator: `#activator="{ props }"` + `v-bind="props"`
- **컴포넌트에 v-text 금지** (`vue/no-v-text-v-html-on-component`) — 보간(`{{ }}`)
  사용. 일반 요소(div 등)의 v-text는 허용.
- **v-html은 로케일 콘텐츠(WorkExperience)에만** — eslint-disable 주석과 함께.
  외부 입력을 v-html에 넣지 말 것 (이 사이트는 사용자 입력이 없다).
- 폰트: index.html에서 Google Fonts 로드 (Roboto·Nanum Gothic·Lato·Poppins) —
  Poppins/Lato는 MainParallax 애니메이션 타이틀 전용.

## 코드 스타일

- prettier 설정(`.prettierrc`): 세미콜론 없음 · 작은따옴표 · trailing comma 없음.
- ESLint: 루트(`eslint.config.js` — 서버 CommonJS)와 SPA(`spa/eslint.config.js` —
  ESM·vue3 권장)가 분리되어 있다. 포맷 규칙은 eslint-config-prettier로 해제.
- 컴포넌트는 **Options API 유지** (원본과 1:1 대응). 신규 최소 코드(App.vue)만
  `<script setup>`.
- import는 상대 경로 + 확장자 명시 (`../stores/menu.js`, `./AppFab.vue`).

## 배포

- 대상 서버: `/home/jpark/joonsang-web-interface` (PM2 cluster 2 인스턴스,
  `ecosystem.config.js`).
- 절차: 서버에서 `pm2 delete joonsang-web` → `git pull` → `npm run deploy`.
- `npm run deploy` = `npm install` + `spa-build-prod`(서버에서 vite 빌드) +
  `pm2 start`. **서버 Node가 Vite 7 요구사항(20.19+/22.12+)을 충족해야 한다.**
- `spa/dist`는 커밋하지 않는다 (gitignore `dist`) — 배포 서버에서 빌드한다.
- app.env.{development,production}.json은 gitignore — 서버에 직접 배치되어 있다.

## docs/ 폴더 규칙

`docs/`는 **git으로 추적하는 작업 관리 문서 폴더**다. 파일 2개를 유지한다:

- **`docs/WORKLOG.md`** (작업 일지): AI 세션 단위 기록. 매 작업 세션이 끝나면
  최신 항목을 **맨 위에** 추가한다 — 날짜·작업 내용·결정 사항·후속 작업(TODO).
  왜 그렇게 했는지(결정 배경)를 반드시 남긴다.
- **`docs/CHANGELOG.md`** (체인지로그): 버전 단위 기록 (Keep a Changelog 형식).
  기능 변경이 있는 작업은 package.json(루트·spa 동기) 버전을 올리고 항목을 추가한다.

작업 완료 시 두 파일 갱신은 **필수 절차**다 — 코드만 고치고 문서를 건너뛰지 말 것.
그 외 설계 초안·제안서 등 일회성 문서도 docs/에 두되, 확정되지 않은 초안은
파일명에 `draft-` 프리픽스를 붙인다.
