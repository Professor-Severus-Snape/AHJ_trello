import './form.css';

import Card from '../card/Card';

// <form class="form hidden">
//   <label class="visually-hidden" for="add-card">Enter a title for this card</label>
//   <textarea class="form__textarea" id="add-card" placeholder="Enter a title..."></textarea>
//   <div class="form__footer">
//     <div class="form__buttons">
//       <button class="form__add" type="submit">Add Card</button>
//       <div class="form__close"></div>
//     </div>
//     <div class="menu">
//       <span class="menu__dot"></span>
//       <span class="menu__dot"></span>
//       <span class="menu__dot"></span>
//     </div>
//   </div>
// </form>
export default class Form {
  constructor() {
    this.element = document.createElement('form');
    this.element.classList.add('form', 'hidden');

    this.label = document.createElement('label');
    this.label.classList.add('visually-hidden');
    this.label.for = 'add-card';
    this.label.textContent = 'Enter a title for this card';

    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('form__textarea');
    this.textarea.id = 'add-card';
    this.textarea.placeholder = 'Enter a title for this card...';

    this.footer = document.createElement('div');
    this.footer.classList.add('form__footer');

    this.buttons = document.createElement('div');
    this.buttons.classList.add('form__buttons');

    this.addBtn = document.createElement('button');
    this.addBtn.classList.add('form__add');
    this.addBtn.type = 'submit';
    this.addBtn.textContent = 'Add Card';

    this.closeBtn = document.createElement('div');
    this.closeBtn.classList.add('form__close');

    this.buttons.append(this.addBtn, this.closeBtn);

    this.menu = document.createElement('div');
    this.menu.classList.add('menu');

    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement('span');
      dot.classList.add('menu__dot');
      this.menu.append(dot);
    }

    this.footer.append(this.buttons, this.menu);

    this.element.append(this.label, this.textarea, this.footer);

    this.addListeners();
  }

  addListeners() {
    this.closeBtn.addEventListener('click', this.onCloseForm.bind(this));
    this.element.addEventListener('submit', this.onSubmitForm.bind(this));
  }

  render(previousSelector) {
    const previousElement = document.querySelector(previousSelector);
    previousElement.after(this.element);
  }

  showForm() {
    this.element.classList.remove('hidden');
  }

  hideForm() {
    this.element.classList.add('hidden');
  }

  closeForm() {
    this.textarea.value = '';
    this.hideForm();
    const btn = this.element.nextElementSibling;
    btn.classList.remove('hidden');
  }

  onCloseForm() {
    this.closeForm();
  }

  onSubmitForm(event) {
    event.preventDefault();

    const message = this.textarea.value.trim();

    if (!message) {
      this.textarea.value = '';
      return;
    }

    // TODO: if (message уже есть в localStorage), то показать tooltip и выйти через return

    const card = new Card(message);
    const col = this.element.closest('.column');
    card.addCard(`.${col.classList[1]} .cards`);
    // TODO: добавить данные карточки в localStorage

    this.closeForm();
  }
}
