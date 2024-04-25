import App from './components/App.js';
import details from './components/details.js';  

const init = () => {
  window.addEventListener("hashchange", () => {
    const main = document.querySelector('main');
    main.innerHTML = "";
    switch(window.location.hash) {
      case " ":
        main.appendChild(App());
        break;
      case "#details":
        console.log(localStorage.getItem('id'));
        main.appendChild(details(localStorage.getItem('id')));
        break;
      default:
        main.appendChild(App());
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.appendChild(App());
  init();


});
