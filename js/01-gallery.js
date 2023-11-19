import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('ul.gallery');
let targetItem = ``;

createGallery(galleryItems);

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        callModalBox(evt.target);
    }
}
 function callModalBox(target) {
    targetItem = `<img src="${target.dataset.source}" width="800" height="600" alt="${target.alt}">`;
    return basicLightbox.create(targetItem).show();
}
function createGallery(items) {
    const galleryListMarkup = items.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`
    });

    galleryRef.insertAdjacentHTML('beforeend', galleryListMarkup.join(''));
}
