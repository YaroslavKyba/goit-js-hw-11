import axiosCl from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class ImgAPIService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;

    this.axios = axiosCl.create({
      baseURL: 'https://pixabay.com/api/',
      params: {
        key: '40789881-740a9124b121bb9def1cb2b55',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    });
  }

  fetchImage() {
    return this.axios.get('', {
      params: { q: this.searchQuery, page: this.page },
    });
  }

  errorNotification() {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
