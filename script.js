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
    document.getElementById("overlay_title").innerHTML = photos[index];
    document.getElementById("overlay_photo").src = "./img/" + photos[index];
    document.getElementById("overlay_photo").alt = "Foto " + (index + 1);
    document.getElementById("overlay_counter").innerHTML = (index + 1) + "/" + photos.length;
    document.getElementById("overlay").classList.remove("d_none");
}


/** Close Overlay */
function closeOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.classList.add("d_none");
}