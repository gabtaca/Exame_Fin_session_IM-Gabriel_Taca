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
  constructor(numero, mobile, largeur) {
    this.numero = numero;
    this.mobile = mobile;
    this.largeur = largeur;
  }

  /**
   * 
   * @returns {HTMLElement}
   */
  tohtml(){
    const divHtml = document.createElement('div');
    const spanNumero = document.createElement('span');
    const spanmobile = document.createElement('span');
    const spanLargeur = document.createElement('span');

    spanNumero.textContent = this.numero;
    spanmobile.textContent = this.mobile;
    spanLargeur.textContent = this.largeur;

    divHtml.className = 'card flex flex-col items-center justify-center bg-black text-white w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-md';
    spanmobile.className = 'hidden lg:block'
    spanLargeur.className = 'lg:hidden'

    divHtml.appendChild(spanNumero);
    divHtml.appendChild(spanmobile);
    divHtml.appendChild(spanLargeur);

    return divHtml;
  }
}

const cardsContainer = document.getElementById('cards__container');

// Define the cards data
const cards = [
  new Card ('1', '300px / 300px', '200px / 200px'),
  new Card ('2', '300px / 300px', '200px / 200px'),
  new Card ('3', '300px / 300px', '200px / 200px'),
  new Card ('4', '300px / 300px', '200px / 200px'),
  new Card ('5', '300px / 300px', '200px / 200px'),
  new Card ('6', '300px / 300px', '200px / 200px'),
  new Card ('7', '300px / 300px', '200px / 200px'),
  new Card ('8', '300px / 300px', '200px / 200px'),
  new Card ('9', '300px / 300px', '200px / 200px'),
];


cards.forEach(card => {
  cardsContainer.appendChild(card.tohtml());
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.getElementById("body");
  const cards = document.querySelectorAll('.card');

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("bg-black");
    toggleButton.classList.toggle("bg-pink-500");

    body.classList.toggle("bg-cyan-200");
    body.classList.toggle("bg-black");

    cards.forEach((card) => {
      card.classList.toggle("bg-black");
      card.classList.toggle("bg-pink-500");
    });
  });
});

