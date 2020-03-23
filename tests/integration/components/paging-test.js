import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';




module('Integration | Component | paging', function(hooks) {
  setupRenderingTest(hooks);

  test('render logic work prev-1..number..last-next', async function(assert) {

    
    assert.expect(1);
    let paging = Ember.Object.create({
      page: 3
    });

    this.set('pagingObj', paging);

    await render(hbs`<Paging @paging={{this.pagingObj}} />`);

    

    assert.equal(this.element.getElementsByTagName('a')[3].innerHTML, '3');

  });
});
