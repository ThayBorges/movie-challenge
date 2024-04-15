import { getDetails , IMG_URL } from "../lib/tmdb.js";

const Details = (id) => {
    const container = document.createElement('div');
    getDetails(id)
      .then((data) => {
        
          const movieEl = createMovieElement(data);
          container.appendChild(movieEl);
    
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
      return container;
  }

  function createMovieElement({ title, poster_path, vote_average, overview }) {
    const container = document.createElement('div');

    const details = `
    <a href="/">home</a>
    <img src="${poster_path ? IMG_URL + poster_path : 'http://via.placeholder.com/1080x1580'}" alt="${title}">
    <div class="movieInfo">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
        <br/> 
    </div>
    `
    container.innerHTML = details;
    return container;
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

export default Details;