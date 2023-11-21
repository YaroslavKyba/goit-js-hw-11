export default class LoadMoreBtnCl {
  constructor({ selector, hidden = false }) {
    this.button = document.querySelector(selector);

    hidden && this.hide();
  }

  show() {
    this.button.classList.remove('is-hidden');
  }

  hide() {
    this.button.classList.add('is-hidden');
  }
}
