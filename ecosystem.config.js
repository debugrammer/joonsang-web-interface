/*
 * PM2 Config
 */
module.exports = {
  apps: [
    {
      /*
       * General
       */
      name: 'joonsang-web',
      script: '/home/jpark/joonsang-web-interface/server/index.js',
      cmd: '/home/jpark/joonsang-web-interface',
      interpreter: 'node',
      interpreterArgs: '--max-old-space-size=128',

      /*
       * Advanced features
       */
      instances: '2',
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '128M',

      /*
       * Log files
       */
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      error_file: '/home/jpark/logs/joonsang-web/joonsang-web-err.log',
      out_file: '/home/jpark/logs/joonsang-web/joonsang-web-out.log',
      merge_logs: true,
      pid_file: '/home/jpark/joonsang-web.pid',

      /*
       * Control flow
       */
      min_uptime: 3000,
      listen_timeout: 5000,
      kill_timeout: 5000,
      max_restarts: 10,
      restart_delay: 5000,
      autorestart: true,

      /*
       * Environment settings
       */
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
