import ImgAPIService from './API';
import LoadMoreBtnCl from './loadmoreBtn';
import { createMarkup, clearGallery } from './markup';

const searchQuery = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtnCl({ selector: '.load-more', hidden: true });
console.log(loadMoreBtn);
const newApiService = new ImgAPIService();

searchQuery.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', loadImages);

function onSubmit(ev) {
  ev.preventDefault();

  newApiService.query = ev.currentTarget.searchQuery.value;
  newApiService.resetPage();
  clearGallery(gallery);

  loadImages();
}

function loadImages() {
  loadMoreBtn.hide();

  newApiService
    .fetchImage()
    .then(imgData => {
      loadMoreBtn.show();

      newApiService.incrementPage();
      createMarkup(imgData.data.hits, gallery);
    })
    .catch(_ => newApiService.errorNotification());
}
