export let filters = document.querySelectorAll ('.category ul li');
let cards = document.querySelectorAll ('.cards>.card');

filters.forEach (ele => {
  ele.addEventListener ('click', function () {
    document.querySelector ('.active').classList.remove ('active');
    this.classList.add ('active');
    cards.forEach (function (card) {
      card.style.display = 'none';
    });
    document.querySelectorAll (this.dataset.type).forEach (el => {
      el.style.display = 'block';
    });
  });
});

