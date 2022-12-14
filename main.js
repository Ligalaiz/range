import { formatVal } from './utils/formatVal.utils.js';
import { templateStr } from './internals/templateStr.internals.js'

class MultipleRange {
  constructor() {
    this.fromField = document.getElementById('fromField');
    this.fromRange = document.getElementById('fromRange');
    this.toField = document.getElementById('toField');
    this.toRange = document.getElementById('toRange');
    this.thumbLeft = document.getElementById('thumbLeft');
    this.thumbRight = document.getElementById('thumbRight');
    this.range = document.getElementById('range');
  }
  static renderTemplate(parent = 'app') {
    const template = templateStr;
    const parentNode = document.getElementById(parent);

    if (!!parentNode) parentNode.innerHTML = template;
    }
  setFromInput = () => {
    const min = parseInt(this.fromRange.min);
    const max = parseInt(this.fromRange.max);

    this.fromRange.value = Math.min(
      parseInt(this.fromRange.value),
      parseInt(this.toRange.value)
    );

    const percent = ((this.fromRange.value - min) / (max - min)) * 100;

    this.thumbLeft.style.left = `${percent}%`;
    this.range.style.left = `${percent}%`;
    this.fromField.textContent = `${formatVal(this.fromRange.value)}₽`;
  };

  setToInput = () => {
    const min = parseInt(this.toRange.min);
    const max = parseInt(this.toRange.max);

    this.toRange.value = Math.max(
      parseInt(this.toRange.value),
      parseInt(this.fromRange.value)
    );

    const percent = ((this.toRange.value - min) / (max - min)) * 100;

    this.thumbRight.style.right = `${100 - percent}%`;
    this.range.style.right = `${100 - percent}%`;
    this.toField.textContent = `${formatVal(this.toRange.value)}₽`;
  };
}

window.addEventListener('load', () => {
  MultipleRange.renderTemplate();
  const multipleRange = new MultipleRange();

  multipleRange.setFromInput();
  multipleRange.setToInput();

  document
    .getElementById('fromRange')
    .addEventListener('input', multipleRange.setFromInput);
  document
    .getElementById('toRange')
    .addEventListener('input', multipleRange.setToInput);
});
