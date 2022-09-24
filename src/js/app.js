import { classNames, select } from './settings.js';
import Product from './Product.js';

const app = {
  initData: function () {
    const thisApp = this;
    const url = select.db.url + '/' + select.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initProducts();
        // console.log('data', thisApp.data.products);
      });
  },

  initProducts: function () {
    const thisApp = this;
    console.log('data', thisApp.data.products);
    for (let product in thisApp.data.products) {
      new Product(
        thisApp.data.products[product].id,
        thisApp.data.products[product]
      );
    }
  },

  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[1].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);
    console.log(thisApp.pages);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (e) {
        const clickedElement = this;
        e.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      // page.classList.toggle(classNames.pages.active, page.id == pageId);
      if (pageId == 'home' && (page.id == 'products' || page.id == 'about')) {
        page.classList.add(classNames.pages.active);
      } else page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    window.location.hash = '#/' + pageId;
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();
