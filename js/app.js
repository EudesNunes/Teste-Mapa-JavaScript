window.onload = function inicial() {
    urlExpandir = 'url(../img/mapa/expandir.png)';
    urlDiminuir = 'url(../img/mapa/diminuir.png)';
    AjusteMapa = "expandir";
}

function ajustar() {
    
    var divMapa = document.getElementById("Mapa");

    if (AjusteMapa == "diminuir") {
        document.getElementById("ajuste").style.backgroundImage = urlExpandir;
        AjusteMapa = "expandir";
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        document.getElementById("ajuste").style.backgroundImage = urlDiminuir;
        AjusteMapa = "diminuir";
        if (divMapa.requestFullscreen) {
            divMapa.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            divMapa.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            divMapa.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            divMapa.msRequestFullscreen();
        }
    }
}