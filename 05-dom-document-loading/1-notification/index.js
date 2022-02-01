export default class NotificationMessage {
  static isElement = false;
  constructor (
    text = '', {
      duration = 0,
      type = '',
    } = {}) {
    this.text = text;
    this.duration = duration;
    this.type = type;
    this.render();
  }
  getTemplate () {
    return `
      <div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.text}
          </div>
        </div>
      </div>
    `
  }
  render () {
    const element = document.createElement('div'); // (*)
    element.innerHTML = this.getTemplate();
    this.element = element.firstElementChild;
  }
  show (targetElement = '') {
    if (NotificationMessage.isElement){
      NotificationMessage.isElement.remove();
    }
    NotificationMessage.isElement = this.element;
    targetElement ? targetElement.append(this.element) : document.body.append(this.element);
    setTimeout(() => {this.destroy()}, this.duration);
  }
  remove () {
    this.element.remove();
  }
  destroy () {
    this.remove();
  }
}
