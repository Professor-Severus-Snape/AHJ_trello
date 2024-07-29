import Column from '../components/column/Column';
import Copyrights from '../components/copyrights/Copyrights';
import DragController from './DragController';
import Storage from './Storage';

export default class App {
  constructor() {
    this.wrapper = document.querySelector('.wrapper');

    this.columnTodo = new Column('todo', 'todo');
    this.columnProgress = new Column('in progress', 'progress');
    this.columnDone = new Column('done', 'done');

    this.copyrights = new Copyrights();

    this.storage = new Storage();
  }

  init() {
    this.render();
    this.copyrights.checkRights();
    this.dragController = new DragController();
  }

  render() {
    this.createTrelloContainer();

    const data = this.storage.formData;

    this.columnTodo.render('.container', data);
    this.columnProgress.render('.container', data);
    this.columnDone.render('.container', data);

    this.copyrights.render('.wrapper');
  }

  createTrelloContainer() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);
  }
}
