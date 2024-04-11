const manejadorDeVideos = (function() {
    function _cargarVideo(url, id) {
        const iframe = document.getElementById(id);
        if (!iframe) return;
        iframe.setAttribute("src", url);
    }

    return {
        cargarVideo: function(url, id) {
            _cargarVideo(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }

    setInicio() {
        console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        manejadorDeVideos.cargarVideo(this.getUrl(), this._id);
    }

    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        manejadorDeVideos.cargarVideo(urlConTiempo, this._id);
    }
}


window.addEventListener("DOMContentLoaded", (event) => {
    const videoMusica = new Reproductor("https://www.youtube.com/embed/-KdGmnEcC4k", "musica");
    const videoPelicula = new Reproductor("https://www.youtube.com/embed/WDfy3s_XQ-k", "peliculas");
    const videoSerie = new Reproductor("https://www.youtube.com/embed/V8WQhxHEmMc", "series");

    videoMusica.playMultimedia();
    videoPelicula.playMultimedia();
    videoSerie.playMultimedia();

    videoSerie.setInicio(10); 
});
