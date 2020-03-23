import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-error', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with message', async function(assert) {
  

    assert.expect(1);
    this.set('headerValue', 'error mes');
    await render(hbs`<SearchError @text={{this.headerValue}} />`);

    assert.equal(this.element.querySelector('p').innerHTML, 'error mes');


  });
});
