import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class MoviesRoute extends Route {
   queryParams = {
      pageQuery: {
         refreshModel: true
      },
      searchQuery: {
         refreshModel: true
      }
   };
   
   api_key = '?api_key=fa57e94c8ebb94e07576d30f4511d809';

   async model(params) {
      let model = {
         isSuccess: true,
         data: null,
         errorMassege: null
      }

      let url = ``;
      if (params.searchQuery) {
         url = 'https://api.themoviedb.org/3/search/movie/' + this.api_key + `&query=${params['searchQuery']}` + `&page=${params['pageQuery']}`;

      } else {
         url = 'https://api.themoviedb.org/3/movie/popular' + this.api_key + `&page=${params['pageQuery']}`;
      }

      let response = await fetch(url);


      if (response.ok) {
         model.data = await response.json();
      } else {
         model.isSuccess = false;
         model.errorMassege = response.status_message;
      }

      return model
   }

   @action
   async loading(transition, originRoute) {
      let controller = this.controller;
      controller.set('currentlyLoading', true);
      transition.promise.finally(function () {
         controller.set('currentlyLoading', false);
      });
   }

}

