import { valapi, agents } from './utility/utility.js';
import { getAllAgents } from './utility/allagents.js';

export const renderAllAgents = (array, target, render) => {
  array.forEach((element) => {
    target.innerHTML += render(element);
  });
};

export const allAgentsHtml = (agent) => {
  return `<div class="allAgentsContainer">
            <a href="./details.html?uuid=${agent.uuid}">
              <div class="allAgentContent">
                <img  class="agentIcon" src=${agent.displayIcon} />
                <h1 class="agentName">${agent.displayName}</h1>
                <p class="agentRole">${agent.role.displayName}</p>
              </div>
            </a>
          </div>`;
};

getAllAgents(valapi, agents);
