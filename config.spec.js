const expect = require('chai').expect;
const config = require('./config');

describe('config', () => {

  afterEach(() => {
    process.env.NODE_ENV = 'testing';
  });

  describe('get', () => {
    it('should return the default value', () => {
      const value = config.get('API_ADDRESS');
      expect(value).to.equals('https://localhost');
    });

    it('should support env overrides', () => {
      process.env.SENTRY_DSN = 'hello world';
      expect(config.get('SENTRY_DSN')).to.equals('hello world');
    });
  });


  it('can use staging env', () => {
    process.env.NODE_ENV = 'staging';
    const value = config.get('API_ADDRESS');
    expect(value).to.equals('https://api-staging.iconbuild.com');
  });
});
