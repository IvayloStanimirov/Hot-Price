import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let prices = document.querySelectorAll('.price');
  let fireIcon = document.createTextNode('🔥')
  let fireElement = document.createElement('span');
  
  prices[2].children[0].style.display = 'inline-block'
});
