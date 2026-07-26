// 루트 ESLint — 서버(Node CommonJS) 코드 대상. SPA는 spa/eslint.config.js 별도.
const js = require('@eslint/js')
const prettierConfig = require('eslint-config-prettier')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['server/**/*.js', 'ecosystem.config.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    }
  },
  {
    ignores: ['node_modules/**', 'spa/**']
  }
]
