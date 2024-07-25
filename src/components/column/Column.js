import './column.css';

import allCards from '../../js/allCards';
import Card from '../card/Card';
import Form from '../form/Form';

// <div class="column todo">
//   <header class="header">
//     <h3 class="header__title">TODO</h3>
//     <div class="menu">
//       <span class="menu__dot"></span>
//       <span class="menu__dot"></span>
//       <span class="menu__dot"></span>
//     </div>
//   </header>
//   <ul class="cards">
//     <li class="cards__item">Welcome to Trello!</li>
//     <li class="cards__item">This is a card.</li>
//     <li class="cards__item">Click on a card to see whats's behind it.</li>
//     <li class="cards__item">You can attach pictures and files...</li>
//     <li class="cards__item">... any kind of hyperlink ...</li>
//     <li class="cards__item">... or checklists.</li>
//   </ul>
//   <button class="column__button" type="button">+ Add another card</button>
// </div>
export default class Column {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('column');

    this.header = document.createElement('header');
    this.header.classList.add('header');

    this.title = document.createElement('h3');
    this.title.classList.add('header__title');

    this.menu = document.createElement('div');
    this.menu.classList.add('menu');

    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement('span');
      dot.classList.add('menu__dot');
      this.menu.append(dot);
    }

    this.header.append(this.title, this.menu);

    this.list = document.createElement('ul');
    this.list.classList.add('cards');

    this.button = document.createElement('button');
    this.button.classList.add('column__button');
    this.button.type = 'button';
    this.button.textContent = '+ Add another card';

    this.element.append(this.header, this.header, this.list, this.button);
  }

  render(parentSelector, titleText, classModifier) {
    this.element.classList.add(classModifier);
    this.title.textContent = titleText;
    this.parentElement = document.querySelector(parentSelector);
    this.parentElement.append(this.element);

    const messages = allCards[classModifier];
    for (let i = 0; i < messages.length; i += 1) {
      const card = new Card(messages[i]);
      card.addCard(`.${classModifier} .cards`);
    }

    this.form = new Form();
    this.form.render(`.${classModifier} .cards`);
  }
}
