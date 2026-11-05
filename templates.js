/** HTML für Fotos */
function getPhotoTemplate(index) {
    return '<img onclick="openOverlay(' + index + ')" ' +
                'class="gallery_photo" ' +
                'src="./img/' + photos[index] + '" ' +
                'alt="Foto ' + (index + 1) + '">';
}


