import { getMovies , searchMovies } from "../lib/tmdb.js";

const API_KEY = 'api_key=8da53c7d14f03ceb87ea073e21c6bc1f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const form = document.getElementById('form');
const search = document.getElementById('search');

const App = () => {
  const container = document.createElement('div');
  getMovies()
    .then((data) => {
      data.results.forEach((movie) => {
        const movieEl = createMovieElement(movie);
        container.appendChild(movieEl);
      });
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
    return container;
}


function createMovieElement({ title, poster_path, vote_average, overview, id }) {
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');

  movieEl.innerHTML = `
    <img src="${poster_path ? IMG_URL + poster_path : 'http://via.placeholder.com/1080x1580'}" alt="${title}">
    <div class="movieInfo">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
        <br/> 
        <button class="know-more" data-id="${id}">Know More</button>
    </div>
  `;  

  movieEl.querySelector('.know-more').addEventListener('click', () => {
    console.log('cheguei aqui');
    window.location.hash="#details";
    localStorage.setItem('id',id);
   
  })

  return movieEl;
}

function getColor(vote) {
  if (vote >= 8) {  
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm) {
      searchMovies('&query=' + searchTerm)
      .then((data) => {
        main.innerHTML = '';
        data.results.forEach((movie) => {
          const movieEl = createMovieElement(movie);
          main.appendChild(movieEl);
        });
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
      
  }else{
    getMovies(API_URL);
  }
})


export default App;
