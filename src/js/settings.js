export const select = {
  templateOf: {
    productList: '#template-products',
  },
  containerOf: {
    productList: '#product-list',
    pages: '#pages',
    discoverBtn: '.hero a',
    contact: '#contact',
    submitBtn: 'form button',
    input: {
      name: '#name',
      title: '#title',
      message: '#message',
    },
  },
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
  nav: {
    links: '.nav-links a',
  },
};

export const displayContent = {
  home: ['products', 'home'],
  products: ['products'],
  contact: ['contact'],
};

export const classNames = {
  pages: {
    active: 'active',
  },
  input: {
    error: 'error',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
