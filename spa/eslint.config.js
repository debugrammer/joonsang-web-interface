// SPA ESLint — eslint 9 flat config + Vue 3 권장 규칙.
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // 포맷 규칙은 prettier 스타일(원본 코드베이스 포맷)과 충돌하므로 해제
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // 페이지 파일명은 Nuxt 원본 경로 보존 규칙(Home, Portfolio 등 단일 단어) 우선
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['vite.config.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**']
  }
]
