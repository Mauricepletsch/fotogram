/** HTML für Fotos */
function getPhotoTemplate(index) {
    return `<img onclick="openOverlay(${index})"
                 class="gallery_photo"
                 src="./img/${photos[index]}"
                 alt="Foto ${index + 1}">`;

}

/** HTML für Overlay */
function getOverlayTemplate(index) {
    return `<div class="overlay_content" onclick="event.stopPropagation()">
                <button onclick="closeOverlay()">X</button>
                <img class="overlay_photo"
                     src="./img/${photos[index]}"
                     alt="Foto ${index + 1}">
            </div>`;
}
