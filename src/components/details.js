import { getDetails , IMG_URL } from "../lib/tmdb.js";
import { getColor } from "../lib/color.js";

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

function createMovieElement({ title, poster_path, vote_average, overview, release_date, genres, original_title }) {
    const container = document.createElement('div');

    const stars = generateStars(vote_average);

    const details = `
    <div class="container-details">
        <a class="buttonDetails" href="/">VOLTAR A LISTA</a>
        <div class="details-content">
            <img class="imgDetails" src="${poster_path ? IMG_URL + poster_path : 'http://via.placeholder.com/1080x1580'}" alt="${title}">
            <div class="movieInfoDetails">
                <h3>${title}</h3>
                <p><strong>Título Original:</strong> ${original_title}</p>
                <p><strong>Ano de Lançamento:</strong> ${release_date}</p>
                <p><strong>Gênero:</strong> ${genres.map(genre => genre.name).join(', ')}</p>
                ${stars}
                <h3>Overview</h3> ${overview}
            </div>
        </div>
    </div>
    `;

    container.innerHTML = details;
    return container;
}

function generateStars(vote_average) {
    const maxStars = 5;
    const fullStars = Math.round(vote_average / 2); // Converte a escala de 0-10 para 0-5

    let stars = '';
    for (let i = 0; i < maxStars; i++) {
        if (i < fullStars) {
            stars += '<span class="star full"></span>'; // Estrela cheia
        } else {
            stars += '<span class="star empty"></span>'; // Estrela vazia
        }
    }

    return stars;
}

export default Details;
