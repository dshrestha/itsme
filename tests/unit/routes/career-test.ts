import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | career', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:career');
    assert.ok(route);
  });
});
