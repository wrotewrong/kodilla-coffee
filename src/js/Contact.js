import { classNames, select } from './settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;
    thisContact.getElements(element);
    thisContact.validateInput();
  }

  getElements(element) {
    const thisContact = this;

    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.submitBtn = thisContact.dom.wrapper.querySelector(
      select.containerOf.submitBtn
    );
    thisContact.dom.inputs = {};
    thisContact.dom.inputs.name = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.name
    );
    thisContact.dom.inputs.title = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.title
    );
    thisContact.dom.inputs.message = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.message
    );
  }

  validateInput() {
    const thisContact = this;

    thisContact.dom.submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      for (let input in thisContact.dom.inputs) {
        if (!thisContact.dom.inputs[input].value) {
          thisContact.dom.inputs[
            input
          ].placeholder = `please enter the ${input}`;
          thisContact.dom.inputs[input].classList.add(classNames.input.error);
        } else {
          thisContact.dom.inputs[input].classList.remove(
            classNames.input.error
          );
          thisContact.dom.inputs[input].placeholder = '';
        }
      }
    });
  }
}

export default Contact;
