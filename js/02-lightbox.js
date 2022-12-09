import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEL = document.querySelector('.gallery');

onCreatGallery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});

function onCreatGallery() {
  const galleryItemsEl = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      (acc += `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
   `),
    ''
  );
  galleryEL.insertAdjacentHTML('beforeend', galleryItemsEl);
  // console.log(galleryItemsEl);
}
