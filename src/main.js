import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.image-gallery');
const spinner = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);
spinner.style.visibility = 'hidden';

import { servicePhoto } from './js/pixabay-api';
import { markup } from './js/render-functions';

function handleSubmit(event) {
  event.preventDefault();
  spinner.style.visibility = 'visible';

  const value = event.target.elements.imageQuery.value.trim();
  if (value === '') {
    spinner.style.visibility = 'hidden';

    return;
  }
  servicePhoto(value)
    .then(photo => {
      gallery.innerHTML = '';
      if (!photo.total) {
        iziToast.show({
          backgroundColor: 'red',
          position: 'topRight',
          messageColor: 'white',
          iconColor: 'white',
          maxWidth: 432,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(photo);
      gallery.innerHTML = markup(photo.hits);

      const galleryBox = new SimpleLightbox('.image-gallery a', {
        overlayOpacity: 0.7,
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
        captionType: 'attr',
      });
      galleryBox.refresh();
      form.reset();
    })

    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        messageColor: 'white',
        iconColor: 'white',
        maxWidth: 432,
        message: error.message,
      });
      console.log(error.message);
    })
    .finally(() => {
      spinner.style.visibility = 'hidden';
    });
}
