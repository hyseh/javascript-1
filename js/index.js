import {
  valapi,
  agents,
  hideLoader,
  errorMessage,
} from './components/utility.js';

const sectionAll = document.querySelector('#all-agents');

const mainContainer = document.createElement('div');
const mainContainerContent = document.createElement('div');
const flexWrapper = document.createElement('div');

mainContainer.classList.add('main-container');
mainContainerContent.classList.add('main-container-content');
flexWrapper.classList.add('flex-wrapper');

sectionAll.appendChild(mainContainer);
mainContainer.appendChild(mainContainerContent);
mainContainerContent.appendChild(flexWrapper);

const getAllAgents = (url, endpoint) => {
  fetch(url + endpoint + '?isPlayableCharacter=true')
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      hideLoader();
      return results.data;
    })
    .then((agents) => {
      agents.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
      renderAllAgents(agents, flexWrapper, allAgentsHtml);
    })
    .catch((error) => {
      console.error(error);
      sectionAll.removeChild(mainContainer);
      errorMessage('An error occurred, please try again later.', sectionAll);
    });
};

const renderAllAgents = (array, target, render) => {
  array.forEach((element) => {
    target.innerHTML += render(element);
  });
};

const allAgentsHtml = (agent) => {
  return `<div class="agent-container">
            <a href="./details.html?uuid=${agent.uuid}">
              <div class="agent-content">
                <div class="agent-icon-container">
                  <img
                    class="agent-icon"
                    alt="Portrait of ${agent.displayName}"
                    src=${agent.displayIcon}
                  />
                </div>
                <div class="agent-info-container">
                  <h1 class="agent-name">${agent.displayName}</h1>
                  <p class="agent-role">${agent.role.displayName}</p>
                </div>
              </div>
            </a>
          </div>`;
};

getAllAgents(valapi, agents);
