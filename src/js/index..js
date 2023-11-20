import ImgAPIService from './API';
import { createMarkup } from './markup';

const searchQuery = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const newApiService = new ImgAPIService();

searchQuery.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(ev) {
  ev.preventDefault();

  newApiService.query = ev.currentTarget.searchQuery.value;

  newApiService.fetchImage();
  // .then(imgData => {
  //   createMarkup(imgData.data.hits, gallery);
  // })
  // .catch(_ => newApiService.errorNotification());

  //   ev.currentTarget.reset();
}

function onLoadMore() {
  newApiService.fetchImage();
  // .then(imgData => {
  //   createMarkup(imgData.data.hits, gallery);
  // })
  // .catch(_ => errorNotification());
}
