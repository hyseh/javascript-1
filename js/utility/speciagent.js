import { renderSpeciAgent, speciAgentHtml } from '../details.js';
const sectionSpeci = document.querySelector('#specificAgent'); // details.html

export const getSpecificAgent = (url, endpoint, uuid) => {
  fetch(url + endpoint + uuid)
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      let agent = results.data;
      console.log(agent);
      renderSpeciAgent(agent, sectionSpeci, speciAgentHtml);
    })
    .catch((error) => {
      console.error(error);
    });
};
