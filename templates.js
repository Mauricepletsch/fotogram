/** HTML für Fotos */
function getPhotoTemplate(index) {
    return '<button class="gallery_button" onclick="openOverlay(' + index + ')">' +
               '<img class="gallery_photo" ' +
                    'src="./img/' + photos[index] + '" ' +
                    'alt="Foto ' + (index + 1) + '">' +
           '</button>';
}


