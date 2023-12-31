function cretePhotoCardMarkup({
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads ${downloads}</b>
      </p>
    </div>
  </div>`;
}

export function createMarkup(data, gallery) {
  data
    .map(dataEl => {
      gallery.insertAdjacentHTML('beforeend', cretePhotoCardMarkup(dataEl));
    })
    .join('');
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}
