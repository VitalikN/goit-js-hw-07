import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClickImg);
onCreatGallery();
function onCreatGallery() {
  const galleryItemsEl = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      (acc += `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`),
    ''
  );

  galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);
}

function onClickImg(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const img = evt.target;
  onModalSource(img.dataset.source, img.alt);
}
let modalSource;
function onModalSource(source, alt) {
  modalSource = basicLightbox.create(
    `<img src="${source}"alt='${alt}'>`,
    {
      onShow: () => window.addEventListener('keydown', onClose),
    },
    {
      onClose: () => window.removeEventListener('keydown', onClose),
    }
  );
  modalSource.show();
}

function onClose(evt) {
  if (evt.code === 'Escape') {
    return;
  }
  modalSource.close();
}
