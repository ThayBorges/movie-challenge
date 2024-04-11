export default () => {
    const container = document.createElement('div');

    const details = `
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
    return details;
}