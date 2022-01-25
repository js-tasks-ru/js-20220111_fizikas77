export default class ColumnChart {


  formatHeading (data){
    return data;
  }
  constructor(obj) {
    this.chartHeight = 50;
    this.link = obj?.link || '';
    this.title = obj?.label || '';
    this.data = obj?.data || [];
    this.value = obj?.value || '';
    this.formatHeading = obj?.formatHeading || (data => `${data}`);
    this.render();
  }

  getTemplate () {
    if (this.data.length === 0){
      this.emptyDataClass = 'column-chart_loading';
    } else {
      this.emptyDataClass = '';
    }
    return `
      <div class="column-chart ${this.emptyDataClass}" style="--chart-height: ${this.chartHeight}">  
        ${this.getTitle()}
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
          <div data-element="body" class="column-chart__chart">
            ${this.getData(this.data)}           
          </div>
        </div>
      </div>
    </div>
    `
  }
  getLink () {
    if (this.link !== '') {
      return `<a href="${this.link}" class="column-chart__link">View all</a>`;
    }
    return '';
  }
  getTitle () {
      return `
        <div class="column-chart__title">
          Total ${this.title}
          ${this.getLink()}
        </div>
      `
  }
  getData (data) {
    let res = '';
    if (data !== []) {
      for (const obj of this.getColumnProps(data)) {
        res += `<div style="--value: ${obj.value}" data-tooltip="${obj.percent}"></div>`;
      }
    }
    return res;
  }
  update (data) {

  }

  render() {
    const element = document.createElement('div'); // (*)

    element.innerHTML = this.getTemplate();

    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild;
  }


  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
  getColumnProps (data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }
}
