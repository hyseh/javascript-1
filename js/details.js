import {
  valapi,
  agents,
  hideLoader,
  errorMessage,
} from './components/utility.js';

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const uuid = param.get('uuid');
console.log(uuid);

const sectionSpecific = document.querySelector('#specific-agent');
const mainContainer = document.createElement('div');
const mainContainerContent = document.createElement('div');
const agentContainer = document.createElement('div');

mainContainer.classList.add('main-container');
mainContainerContent.classList.add('main-container-content');
agentContainer.classList.add('agent-container');

sectionSpecific.appendChild(mainContainer);
mainContainer.appendChild(mainContainerContent);
mainContainerContent.appendChild(agentContainer);

const getSpecificAgent = (url, endpoint, uuid) => {
  fetch(url + endpoint + uuid)
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      hideLoader();
      return results.data;
    })
    .then((agent) => {
      let abilities = agent.abilities;
      renderAgentDetails(agent, abilities, agentContainer);
    })
    .catch((error) => {
      console.error(error);
      sectionSpecific.removeChild(mainContainer);
      errorMessage(
        'An error occurred, please try again later.',
        sectionSpecific
      );
    });
};

const renderAgentDetails = (agent, ability, target) => {
  const agentInfoContaner = document.createElement('div');
  agentInfoContaner.classList.add('agent-info-container');

  const agentName = document.createElement('h1');
  const agentDesc = document.createElement('p');
  agentName.classList.add('agent-name');
  agentName.innerHTML = `${agent.displayName}`;
  agentDesc.innerHTML = `${agent.description}`;
  target.appendChild(agentInfoContaner);
  agentInfoContaner.appendChild(agentName);
  agentInfoContaner.appendChild(agentDesc);

  const agentAbilities = document.createElement('div');
  agentAbilities.classList.add('agent-abilities');
  target.appendChild(agentAbilities);

  ability.forEach((elem) => {
    const abilityContainer = document.createElement('div');
    abilityContainer.classList.add('ability-container');
    agentAbilities.appendChild(abilityContainer);

    const abilityIconContainer = document.createElement('div');
    abilityIconContainer.classList.add('ability-icon-container');
    abilityContainer.appendChild(abilityIconContainer);

    const abilityIcon = document.createElement('img');
    const abilityName = document.createElement('p');

    abilityIcon.src = `${elem.displayIcon}`;
    abilityName.innerHTML = `${elem.displayName}`;

    abilityIconContainer.appendChild(abilityIcon);
    abilityContainer.appendChild(abilityName);
  });

  const agentImageContainer = document.createElement('div');
  const agentImage = document.createElement('img');
  agentImageContainer.classList.add('agent-image-container');
  agentImage.classList.add('agent-image');
  agentImage.src = `${agent.fullPortraitV2}`;
  target.appendChild(agentImageContainer);
  agentImageContainer.appendChild(agentImage);
};

getSpecificAgent(valapi, agents, uuid);
