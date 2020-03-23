import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with text', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    assert.expect(1);
    this.set('headerValue', 'ddd');

    await render(hbs`<Header @text={{this.headerValue}} />`);

    // check title is correct

    assert.equal(this.element.textContent.trim(), 'ddd');

  });
});