const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log("NOT a valid username, my friend. Try again?");
      }
  }
};

// In full transparency, I was stuck here. I looked up a couple of guides and "Axios" kept being used. I have researched it and <br>
//decided to use it because it seemed best for me to complete the project.

module.exports = api;