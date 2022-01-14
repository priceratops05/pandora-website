$(document).ready(function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600,
        easing: 'easeInOutCubic',
    });
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("scrolltop").style.display = "flex";
    } else {
        document.getElementById("scrolltop").style.display = "none";
    }
}

scrollFunction();