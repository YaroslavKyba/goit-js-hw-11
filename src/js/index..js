import { fetchImage, errorNotification } from './API';
import { createMarkup } from './markup';

const searchQuery = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

searchQuery.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(ev) {
  ev.preventDefault();

  const searchValue = ev.currentTarget.searchQuery.value;

  fetchImage(searchValue)
    .then(imgData => {
      createMarkup(imgData.data.hits, gallery);
    })
    .catch(_ => errorNotification());

  //   ev.currentTarget.reset();
}

function onLoadMore() {}
