import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class PagingComponent extends Component {


      get isNotPageOne() {
        const { paging } = this.args
    
        return  paging.page != 1
      }

      @action
      goNextPage(event) {
        event.preventDefault();
        const { paging } = this.args;
        if(paging.page < paging.total_pages)
          this.args.changePage(paging.page + 1);
      }

      @action
      goPreviousPage(event) {
     
        const { paging } = this.args;

        if(paging.page > 1)
        this.args.changePage(paging.page - 1);
      }

      @action
      goStartPage(event) {
        this.args.changePage(1);
      }

      @action
      goLastPage(event) {
     
        const { paging } = this.args;

        this.args.changePage(paging.total_pages);
      }
      
      

}
