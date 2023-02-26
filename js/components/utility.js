export const valapi = 'https://valorant-api.com/v1/';
export const agents = 'agents/';

const main = document.querySelector('main');
const loader = document.querySelector('.loader');

export const hideLoader = () => {
  loader.classList.add('loader-hidden');
  main.removeChild(loader);
};

export const errorMessage = (message = 'no message', target) => {
  const errorContainer = document.createElement('div');
  const errorContainerContent = document.createElement('div');
  const errorMessage = document.createElement('p');

  errorContainer.classList.add('error-container');
  errorContainerContent.classList.add('error-container-content');

  errorMessage.innerHTML = message;

  target.appendChild(errorContainer);
  errorContainer.appendChild(errorContainerContent);
  errorContainerContent.appendChild(errorMessage);
};

export const commonEmail =
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

export const regexValidator = (input, rule) => {
  if (input === '') {
    // console.log('RegTest:', 'false, empty string');
    return false;
  }
  // console.log('RegTest:', rule.test(input));
  return rule.test(input);
};
