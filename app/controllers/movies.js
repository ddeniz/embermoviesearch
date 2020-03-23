import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MovieController extends Controller {
  queryParams = [{
    searchQuery: 'search',
    pageQuery: 'page'
  }]

  @tracked searchQuery = null;
  @tracked pageQuery = null;

  @action
  search(searchValue) {
    this.searchQuery = searchValue;
    this.pageQuery = null;
  }

  @action
  changePage(pageValue) {
    this.pageQuery = pageValue;
  }
}
