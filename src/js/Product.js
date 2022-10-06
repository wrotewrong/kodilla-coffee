import { select, templates } from './settings.js';
import { createDOMFromHTML } from './utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;

    thisProduct.data = data;
    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.product(thisProduct.data);

    thisProduct.element = createDOMFromHTML(generatedHTML);

    const productContainer = document.querySelector(
      select.containerOf.productList
    );

    productContainer.appendChild(thisProduct.element);
  }
}

export default Product;
