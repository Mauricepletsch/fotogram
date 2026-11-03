/** HTML für Fotos */
function getPhotoTemplate(index) {
    return `<img class="gallery_photo" src="./img/${photos[index]}" alt="Foto ${index + 1}">`;
}

/** HTML für Overlay */
function getOverlayTemplate(index) {
    return `<img class="overlay_photo" src="./img/${photos[index]}" alt="Foto ${index + 1}">`;
}
