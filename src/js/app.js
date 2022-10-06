import { classNames, select, displayContent } from './settings.js';
import Product from './Product.js';
import Contact from './Contact.js';

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
      });
  },

  initProducts: function () {
    const thisApp = this;
    for (let product in thisApp.data.products) {
      new Product(thisApp.data.products[product]);
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
      if (displayContent[pageId].includes(page.id)) {
        page.classList.add(classNames.pages.active);
      } else page.classList.remove(classNames.pages.active);
    }

    document
      .querySelector(select.containerOf.discoverBtn)
      .setAttribute('href', '#' + displayContent[pageId][0]);

    window.location.hash = '#/' + pageId;
  },

  initContact: function () {
    const thisApp = this;
    const contactSubpage = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactSubpage);
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
    thisApp.initContact();
  },
};

app.init();
