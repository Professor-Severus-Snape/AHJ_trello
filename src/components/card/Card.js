import './card.css';

// <li class="cards__item">
//   <span class="cards__text">Welcome to Trello!</span>
//   <span class="remove-btn hidden"></span>
// </li>
export default class Card {
  constructor(message) {
    this.element = document.createElement('li');
    this.element.classList.add('cards__item');

    this.text = document.createElement('span');
    this.text.classList.add('cards__text');
    this.text.textContent = message;

    this.removeBtn = document.createElement('span');
    this.removeBtn.classList.add('remove-btn', 'hidden');

    this.element.append(this.text, this.removeBtn);
  }

  addCard(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    parentElement.append(this.element);
  }
}
