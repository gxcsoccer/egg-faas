'use strict';

const mock = require('egg-mock');

describe('test/faas.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/faas-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, faas')
      .expect(200);
  });
});
