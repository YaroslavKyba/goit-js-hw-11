import ImgAPIService from './API';
import LoadMoreBtnCl from './loadmoreBtn';
import { createMarkup, clearGallery } from './markup';

const searchQuery = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

const loadMoreBtn = new LoadMoreBtnCl({ selector: '.load-more', hidden: true });
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

async function loadImages() {
  loadMoreBtn.hide();

  await newApiService
    .fetchImage()
    .then(imgData => {
      loadMoreBtn.show();

      newApiService.incrementPage();
      createMarkup(imgData.data.hits, gallery);
    })
    .catch(_ => newApiService.errorNotification());
}

// if (imgData.data.hits >= imgData.data.totalHits) {
//   console.log(
//     "We're sorry, but you've reached the end of search results."
//   )
// }
