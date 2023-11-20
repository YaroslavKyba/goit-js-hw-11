import axiosCl from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const axios = axiosCl.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40789881-740a9124b121bb9def1cb2b55',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function fetchImage(q) {
  return axios.get('', {
    params: { q },
  });
}

export function errorNotification() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
