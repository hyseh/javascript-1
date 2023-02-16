import { renderAllAgents, allAgentsHtml } from '../index.js';
const sectionAll = document.querySelector('#allAgents'); // index.html

export const getAllAgents = (url, endpoint) => {
  fetch(url + endpoint + '?isPlayableCharacter=true')
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      let agents = results.data;
      agents.sort((a, b) => (a.displayName > b.displayName ? 1 : -1)); // don't know how works lol
      console.log(agents);
      renderAllAgents(agents, sectionAll, allAgentsHtml);
    })
    .catch((error) => {
      console.error(error);
    });
};
