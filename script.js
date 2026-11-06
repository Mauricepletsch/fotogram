let photos = [
    "alaska.webp",
    "anime.webp",
    "atmosphere.webp",
    "blue-tit.webp",
    "hurricane.webp",
    "lake.webp",
    "leopard.webp",
    "moorente.webp",
    "sea.webp",
    "snow.webp",
    "travel.webp",
    "winter.webp"
];

let openedIndex = 0;

/** Anzeige Fotos Liste */
function render() {
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    for (let index = 0; index < photos.length; index++) {
        gallery.innerHTML += getPhotoTemplate(index);
    }
}

/** Öffnet Overlay mit klick auf Foto */
function openOverlay(index) {
    openedIndex = index;
    document.getElementById("overlay_title").innerHTML = photos[index];
    document.getElementById("overlay_photo").src = "./img/" + photos[index];
    document.getElementById("overlay_photo").alt = "Foto " + (index + 1);
    document.getElementById("overlay_counter").innerHTML = (index + 1) + "/" + photos.length;
    document.getElementById("overlay").classList.remove("d_none");
}

/** Nächstes Foto */
function nextPhoto() {
    openedIndex++;
    if (openedIndex >= photos.length) {
        openedIndex = 0;
    }
    openOverlay(openedIndex);
}

/** Vorheriges Foto */
function previousPhoto() {
    openedIndex--;
    if (openedIndex < 0) {
        openedIndex = photos.length - 1;
    }
    openOverlay(openedIndex);
}

/** Close Overlay */
function closeOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.classList.add("d_none");
}


function openFromGallery(index) {
    openOverlay(index);
    document.getElementById("overlay_close").focus();
}