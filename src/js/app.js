import { settings } from './settings.js';

const app = {
  initProducts: function () {
    // const thisApp = this;
  },

  initData: function () {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
      });

    // console.log('data', thisApp.data);
    // thisApp.initProducts();
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();
