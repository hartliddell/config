const expect = require('chai').expect;
const config = require('./config');

describe('config', () => {

  afterEach(() => {
    process.env.NODE_ENV = 'testing';
  });

  it('get', () => {
    expect(config.get('SENTRY_DSN')).to.equals('');
  });

  it('environment variable override', () => {
    process.env.SENTRY_DSN = 'hello world';
    expect(config.get('SENTRY_DSN')).to.equals('hello world');
  });

  it('can use staging env', () => {
    expect(config.get('TOTP_WINDOW')).to.equals(1); // default

    process.env.ENVIRONMENT = 'staging';
    expect(config.get('TOTP_WINDOW')).to.equals(2); // staging
  });
});
