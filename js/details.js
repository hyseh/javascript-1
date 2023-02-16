import { valapi, agents } from './utility/utility.js';
import { getSpecificAgent } from './utility/speciagent.js';

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const uuid = param.get('uuid');
console.log(uuid);

export const renderSpeciAgent = (object, target, render) => {
  target.innerHTML += render(object);
};

export const speciAgentHtml = (agent) => {
  return `<div class="agentContainer">
            <div class="agentContent">
              <h1 class="agentName">${agent.displayName}</h1>
              <p>${agent.description}</p>
              <img src="${agent.fullPortraitV2}" />"
            </div>
          </div>`;
};

getSpecificAgent(valapi, agents, uuid);
