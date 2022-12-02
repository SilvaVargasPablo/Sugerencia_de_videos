const publicFunction = function (url, id) {
  console.log(url, id);
  const setVideoData = (videoUrl, videoId) => {
    const element = document.getElementById(videoId);
    if (element) {
      element.setAttribute("src", videoUrl);
    } else {
      console.warn("el elemento no existe en el DOM");
    }
  };
  return setVideoData(url, id);
};

class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }
  getUrl() {
    return this.#url;
  }
  setUrl(value) {
    this.#url = value;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  #id;
  constructor(url, id) {
    super(url);

    this.#id = id;
  }
  playMultimedia() {
    console.log(this.getUrl(), this.#id);
    publicFunction(this.getUrl(), this.#id);
  }
  setInicio(tiempo) {
    this.setUrl(`${this.getUrl()}?start=${tiempo}`);
  }
}

const Musica = new Reproductor(
  "https://www.youtube.com/embed/ce_9Ze-gf2o",
  "musica"
);

const Peliculas = new Reproductor(
  "https://www.youtube.com/embed/SkgTxQm9DWM",
  "peliculas"
);

const Series = new Reproductor(
  "https://www.youtube.com/embed/JKL4js-VrOA",
  "series"
);





// Series.setInicio();
//se usa para elegir el momento de inicio del video 

Series.playMultimedia();
Musica.playMultimedia();
Peliculas.playMultimedia();