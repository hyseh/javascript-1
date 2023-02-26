import { commonEmail, regexValidator } from './components/utility.js';

const form = document.querySelector('#contact-form');
const fullName = document.querySelector('#full-name');
const errorName = document.querySelector('#name-error');
const subject = document.querySelector('#subject');
const errorSubject = document.querySelector('#subject-error');
const email = document.querySelector('#email');
const errorEmail = document.querySelector('#email-error');
const address = document.querySelector('#address');
const errorAddress = document.querySelector('#address-error');

const validateForm = () => {
  event.preventDefault();

  if (lengthChecker(fullName.value, 0)) {
    errorName.style.display = 'none';
  } else {
    errorName.style.display = 'block';
  }

  if (lengthChecker(subject.value, 9)) {
    errorSubject.style.display = 'none';
  } else {
    errorSubject.style.display = 'block';
  }

  if (regexValidator(email.value, commonEmail) === true) {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'block';
  }

  if (lengthChecker(address.value, 24)) {
    errorAddress.style.display = 'none';
  } else {
    errorAddress.style.display = 'block';
  }
};

const lengthChecker = (value, length) => {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
};

form.addEventListener('submit', validateForm);
