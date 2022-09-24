import { select, templates } from './settings.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.log();
    thisProduct.render();
  }

  log() {
    const thisProduct = this;
    console.log(thisProduct);
    console.log(thisProduct.data);
  }

  render() {
    const thisProduct = this;

    const createDOMFromHTML = function (htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      return div.firstChild;
    };

    const generatedHTML = templates.product(thisProduct.data);

    thisProduct.element = createDOMFromHTML(generatedHTML);

    const productContainer = document.querySelector(
      select.containerOf.productList
    );

    productContainer.appendChild(thisProduct.element);
  }
}

export default Product;
