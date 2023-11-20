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
        page: this.page,
        per_page: 40,
      },
    });
  }

  fetchImage() {
    return this.axios
      .get('', {
        params: { q: this.searchQuery },
      })
      .then(imgData => {
        this.page += 1;
        // createMarkup(imgData.data.hits, gallery);
      })
      .catch(_ => newApiService.errorNotification());
  }

  errorNotification() {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
