import Component from '@glimmer/component';
const DEFAULT_IMAGE_URL =  "https://image.tmdb.org/t/p/w370_and_h556_bestv2/";
const DEFAULT_PLACEHOLDER_IMAGE = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/";

export default class MovieComponent extends Component {

  get poster() {
    const { movie } = this.args

    return movie.poster_path ?  DEFAULT_IMAGE_URL + movie.poster_path : DEFAULT_PLACEHOLDER_IMAGE
  }

  get isGoodMovie() {
    const { movie } = this.args

    return movie.vote_average > 7
  }
}
