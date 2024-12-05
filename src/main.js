import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.image-gallery');

form.addEventListener('submit', handleSubmit);

import { servicePhoto } from './js/pixabay-api';
import { markup } from './js/render-functions';

function handleSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.imageQuery.value;
  if (value === '') {
    return;
  }
  servicePhoto(value)
    .then(photo => {
      console.log(photo);
      gallery.innerHTML = markup(photo.hits);
    })
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    });
}
