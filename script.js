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
    let overlay = document.getElementById("overlay");
    overlay.innerHTML = getOverlayTemplate(index);
    overlay.classList.remove("d_none");
}
