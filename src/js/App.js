import Column from '../components/column/Column';
import Copyrights from '../components/copyrights/Copyrights';
import Form from '../components/form/Form';
import DragController from './DragController';

export default class App {
  constructor() {
    this.wrapper = document.querySelector('.wrapper');

    this.columnToDo = new Column();
    this.columnInProgress = new Column();
    this.columnDone = new Column();

    this.copyrights = new Copyrights();

    this.form = new Form();
  }

  init() {
    this.render();
    this.copyrights.checkRights();
    this.dragController = new DragController();
  }

  render() {
    this.createTrelloContainer();

    this.columnToDo.render('.container', 'TODO', 'todo');
    this.columnInProgress.render('.container', 'IN PROGRESS', 'progress');
    this.columnDone.render('.container', 'DONE', 'done');

    this.copyrights.render('.wrapper');
  }

  createTrelloContainer() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);
  }
}
