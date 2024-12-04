const form = document.querySelector('.form-search');
const gallery = document.querySelector('.image-gallery');

form.addEventListener('submit', handleSubmit);

import { servicePhoto } from './js/pixabay-api';

function handleSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.imageQuery.value;
  if (value === '') {
    return;
  }
  servicePhoto(value).then(photo => {
    console.log(photo);
  });
}
