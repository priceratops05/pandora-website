let photoIndex = 1;
let total = 0;
const images = ["./imagenes/home/foto-carousel1.jpeg", "./imagenes/home/foto-carousel2.webp", "./imagenes/home/foto-carousel3.jpeg", "./imagenes/home/foto-carousel4.jpeg", "./imagenes/home/foto-carousel5.jpeg", "./imagenes/home/foto-carousel6.jpeg"];

const cambiar = function(operator) {
    total = images.length;
    photoIndex = photoIndex + operator;
    if (photoIndex > total) {
        photoIndex = 1
    }
    if (photoIndex < 1) {
        photoIndex = total;
    }

    document.getElementById("img-carousel").src = images[photoIndex - 1];
}


scrolltopButton = document.getElementById("scrolltop");

function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
    scrolltopButton.style.display = 'none';
}

function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
    scrolltopButton.style.display = 'flex';
}