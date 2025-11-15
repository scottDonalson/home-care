module.exports = {
  apps: [{
    name: 'prestige-care-helpers',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3001',
    cwd: '/var/www/prestige-care-helpers',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
};
