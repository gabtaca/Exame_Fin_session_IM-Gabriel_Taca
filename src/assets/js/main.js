// main.js
import '../css/index.sass'
import '../css/style.css'


class Card {
  /**
   * 
   * @param {string} numero 
   * @param {string} mobile 
   * @param {string} desktop 
   */
  constructor(numero, mobile, desktop, prenom) {
    this.numero = numero;
    this.mobile = mobile;
    this.largeur = desktop;
    this.prenom = prenom;
  }

  /**
   * 
   * @returns {HTMLElement}
   */
  tohtml(){
    const divHtml = document.createElement('div');
    const spanNumero = document.createElement('span');
    const spanMobile = document.createElement('span');
    const spanDesktop = document.createElement('span');
    const spanPrenom = document.createElement('span');

    spanNumero.textContent = this.numero;
    spanMobile.textContent = this.mobile;
    spanDesktop.textContent = this.desktop;
    spanPrenom.textContent = this.prenom;

    divHtml.classList = 'card flex flex-col items-center justify-center bg-black text-white w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-md';
    spanMobile.classList = 'hidden lg:block'
    spanDesktop.classList = 'lg:hidden'
    spanPrenom.classList = 'text-white'

    divHtml.appendChild(spanNumero);
    divHtml.appendChild(spanMobile);
    divHtml.appendChild(spanDesktop);
    divHtml.appendChild(spanPrenom);

    return divHtml;
  }
}

const cardsContainer = document.getElementById('cards__container');

const cards = [
  new Card ('1', '300px / 300px', '200px / 200px', 'Garry'),
  new Card ('2', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('3', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('4', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('5', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('6', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('7', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('8', '300px / 300px', '200px / 200px', 'bob'),
  new Card ('9', '300px / 300px', '200px / 200px', 'bob'),
];


cards.forEach(card => {
  cardsContainer.appendChild(card.tohtml());
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const toggledisplay = document.getElementById("toggleHidden");
  const body = document.getElementById("body");
  const cards = document.querySelectorAll('.card');

  toggledisplay.addEventListener("click", ( => }

    toggleDisplay
  ))

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("bg-black");
    toggleButton.classList.toggle("bg-pink-500");

    body.classList.toggle("bg-cyan-200");
    body.classList.toggle("bg-black");

    cards.forEach((card) => {
      card.classList.toggle("bg-black");
      card.classList.toggle("bg-pink-500");
    });
    // indentation -0.5
});

