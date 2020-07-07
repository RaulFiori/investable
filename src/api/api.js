import Axios from 'axios';

class Api {
  constructor() {
    this.api = Axios.create({
      baseURL: `https://jsonbox.io/${process.env.REACT_APP_BOX_ID}`,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  getSuggestions(userId) {
    return this.api
      .get('/suggestions', {
        params: {
          q: `userId:${userId}`,
        },
      })
      .then(response => {
        const [suggestions] = response.data;
        return suggestions;
      })
      .catch(console.error);
  }

  getInvestments(userId) {
    return this.api
      .get('/invest', {
        params: {
          q: `userId:${userId}`,
        },
      })
      .then(response => {
        const [investments] = response.data;
        return investments;
      })
      .catch(console.error);
  }

  getProfile(userId) {
    return this.api
      .get(`/user/${userId}`)
      .then(({ data }) => data)
      .catch(console.error);
  }

  getDashboard(userId) {
    return this.api
      .get('/dashboard', {
        params: { q: `userId:${userId}` },
      })
      .then(response => {
        const [dashboard] = response.data;
        return dashboard;
      })
      .catch(console.error);
  }
}

export default Api;
