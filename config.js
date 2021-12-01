/*
 * A config file for non-sensitive environment
 * variables and data.
 *
 * use: config.get(<key>) to retrieve data
 * note: environment variables do override.
 */
module.exports = {
  default: {
    API_ADDRESS: 'https://localhost',
    CORS_ORIGIN: '*',
    PORT: 3030,
    RATE_LIMITER_BURST_DURATION: 5,
    RATE_LIMITER_BURST_IN_MEMORY_BLOCK_ON_CONSUMED: 20,
    RATE_LIMITER_BURST_POINTS: 20,
    RATE_LIMITER_DURATION: 1,
    RATE_LIMITER_IN_MEMORY_BLOCK_ON_CONSUMED: 10,
    RATE_LIMITER_POINTS: 10,
    REDIS_URL: '//127.0.0.1:6379',
  },

  staging: {
    API_ADDRESS: 'https://api-staging.iconbuild.com',
    LOG_LEVEL: 'debug',
  },

  review: {
    API_ADDRESS: `https://api-pr-${process.env.HEROKU_PR_NUMBER}.herokuapp.com`,
  },

  production: {
    API_ADDRESS: 'https://api.iconbuild.com',
  },

  get: function(key) {

    // Prefer environment variables
    const envValue = process.env[key];
    if (envValue !== undefined) {
      return envValue;
    }

    // GET from environment.
    // ELSE use default.
    const value = this[process.env.NODE_ENV]?.[key];
    return value !== undefined ? value : this.default[key];
  }
}