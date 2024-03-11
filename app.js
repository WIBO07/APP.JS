const peliculas = [
  {
    titulo: "El Padrino",
    año: 1972,
    director: "Francis Ford Coppola",
    poster:
      "https://i.etsystatic.com/35681979/r/il/30d269/3910370144/il_570xN.3910370144_qpwh.jpg",
    estado: "Visto",
  },
  {
    titulo: "El Señor de los Anillos",
    año: 2001,
    director: "Peter Jackson",
    poster:
      "https://m.media-amazon.com/images/I/6143TqGItiL._AC_UF894,1000_QL80_.jpg",
    estado: "Pendiente",
  },
  {
    titulo: "Interstellar",
    año: 2014,
    director: "Christopher Nolan",
    poster: "https://m.media-amazon.com/images/I/91obuWzA3XL.jpg",
    estado: "Viendo",
  },
  {
    titulo: "Origen",
    año: 2010,
    director: "Christopher Nolan",
    poster:
      "https://m.media-amazon.com/images/I/91OiP43E2zL._AC_UF894,1000_QL80_.jpg",
    estado: "Visto",
  },
  {
    titulo: "La Princesa Mononoke",
    año: 1997,
    director: "Hayao Miyazaki",
    poster: "https://m.media-amazon.com/images/I/91zirIhI+7L.jpg",
    estado: "Pendiente",
  },
  {
    titulo: "Parásitos",
    año: 2019,
    director: "Bong Joon-ho",
    poster:
      "https://m.media-amazon.com/images/I/91drDqVGdXL._AC_UF894,1000_QL80_.jpg",
    estado: "Visto",
  },
];

//Recupero mi contenedor main a nivel global
const main = document.querySelector("main");

//Esta función va a pintar la página de bienvenida
const pintarBienvenida = () => {
  main.innerHTML = `
   <h2>Bienvenido/a</h2>
  `;
};
//Esta función va a pintar la página de peliculas
const pintarPeliculas = () => {
  main.innerHTML = `
  <h2>Películas</h2>
  <section id="peliculas"></section>
 `;

  const section = document.querySelector("#peliculas");

  for (const pelicula of peliculas) {
    section.innerHTML += `
    <article>
      <h3>${pelicula.titulo}</h3>
      <h4>${pelicula.director} - ${pelicula.año}</h4>
      <img src=${pelicula.poster} alt=${pelicula.titulo}/>
      <p class=${pelicula.estado}>${pelicula.estado}</p>

    </article>
    `;
  }
};
//Esta función va a pintar la página de series
const pintarSeries = () => {
  main.innerHTML = `
  <h2>Series</h2>
  <section id="Series"></section>

 `;
 const section = document.querySelector("#Series");

  for (const Serie of Series) {
    section.innerHTML += `
    <article>
      <h3>${Serie.titulo}</h3>
      <h4>${Serie.director} - ${Serie.año}</h4>
      <img src=${Serie.poster} alt=${Serie.titulo}/>
      <p class=${Serie.estado}>${Serie.estado}</p>

    </article>
    `;
  }
};

//Por defecto ejecutamos la función de bienvenida
pintarBienvenida();

//Recuperamos los 3 links
const bienvenidalink = document.querySelector("#bienvenidalink");
const peliculaslink = document.querySelector("#peliculaslink");
const serieslink = document.querySelector("#serieslink");

//Le vamos a dar un evento click a cada uno de los links para que disparen las 3 funciones que hemos hecho arriba
bienvenidalink.addEventListener("click", () => {
  pintarBienvenida();
});

peliculaslink.addEventListener("click", () => {
  pintarPeliculas();
});

serieslink.addEventListener("click", () => {
  pintarSeries();
});const Series = [
  {
    titulo: "La casa de papel",
    año: 2017,
    director: "Álex Pina",
    poster:
    "https://i.pinimg.com/564x/a5/65/f5/a565f5750dd9064443c7bcbd99219ac4.jpg",
    estado: "Visto",
  },
  {
    titulo: "Élite",
    año: 2018,
    director: "Carlos Motero-Dario Madrona",
    poster:
      "https://i.blogs.es/6a39f9/elite-4-temporada-cartel/1366_2000.jpeg",
    estado: "Pendiente",
  },
  {
    titulo: "Vis a Vis",
    año: 2015-2019,
    director: "Iván Escobar-Álex Pina",
    poster: "https://pics.filmaffinity.com/Vis_a_vis_Serie_de_TV-704930886-large.jpg",
    estado: "Viendo",
  },
  {
    titulo: "Las Chicas del Cable",
    año: 2017-2020,
    director: "Ramón Campos",
    poster:
      "https://www.formulatv.com/images/series/posters/1300/1389/dest_1.jpg",
    estado: "Visto",
  },
  {
    titulo: "El Ministerio del Tiempo",
    año: 2015,
    director: "Pablo Olivares-Anaís Schaaff",
    poster: "https://pics.filmaffinity.com/el_ministerio_del_tiempo-826544686-mmed.jpg",
    estado: "Pendiente",
  },
  {
    titulo: "Aqui no hay que vivo",
    año: 2003,
    director: "Alberto Caballero",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmYzNTY4YTctZWU2OC00ZTZiLTllNmItNDg1OGE0MjdhZTZkXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_FMjpg_UX1000_.jpg",
    estado: "Visto",
  },
];



