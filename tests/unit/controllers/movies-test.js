import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | movies', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:movies');
    assert.ok(controller);
  });

  test('should update searchQuery and pageQuery on search action', function(assert) {
    assert.expect(4);

    // get the controller instance
    let controller = this.owner.lookup('controller:movies');

    // check the properties before the action is triggered
    assert.equal(
      controller.searchQuery,
      null,
      'searchQuery initialized'
    );
    assert.equal(
      controller.pageQuery,
      null,
      'pageQuery initialized'
    );

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    controller.send('search', 'Testing Rocks!');

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(controller.pageQuery, null, 'pageQuery is not updated');
    assert.equal(controller.searchQuery, 'Testing Rocks!', 'searchQuery  updated');
  });


  test('should update  pageQuery on page  action', function(assert) {
    assert.expect(2);

    // get the controller instance
    let controller = this.owner.lookup('controller:movies');

    // check the properties before the action is triggered
    assert.equal(
      controller.pageQuery,
      null,
      'pageQuery initialized'
    );

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    controller.send('changePage', 1);

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(controller.pageQuery, 1, 'pageQuery is  updated');

  });

});
