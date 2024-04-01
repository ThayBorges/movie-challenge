const App = () => {

  const movieEl = document.createElement('div');
  movieEl.className = "movieEl";
  const movieInfo = document.createElement('div');
  movieInfo.className = 'movieInfo';
  const movieOverview = document.createElement('div');
  movieOverview.className = 'movieOverView';

  movieEl.appendChild(movieInfo);
  movieEl.appendChild(movieOverview);

  return movieEl;
};


export default App;
