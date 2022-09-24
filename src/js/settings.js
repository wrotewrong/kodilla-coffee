export const select = {
  templateOf: {
    productList: '#template-products',
  },
  containerOf: {
    productList: '#product-list',
    pages: '#pages',
  },
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
  nav: {
    links: '.nav-links a',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
