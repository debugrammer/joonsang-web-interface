/*
 * 서버 설정 로더 — NODE_ENV(development/production)에 따라
 * app.env.{profile}.json을 로드한다.
 */
const appEnv = require(`../app.env.${process.env.NODE_ENV}`)

const env = {
  BUILD_VERSION: process.env.npm_package_version || 'unknown',
  PROFILE: process.env.NODE_ENV
}

module.exports.appEnv = appEnv
module.exports.env = env
