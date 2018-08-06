const axios = require('axios');

module.exports = {
  useFileSystemPublicRoutes: false,
  async exportPathMap(defaultPathMap) { // eslint-disable-line no-unused-vars
    const launches = await axios.get('https://api.spacexdata.com/v2/launches');
    const launchList = launches.data.reduce((obj, item) => {
      obj[`/launch/${item.flight_number}`] = { page: '/launch', query: { id: item.flight_number } };
      return obj;
    }, {});

    const pads = await axios.get('https://api.spacexdata.com/v2/launchpads');
    const padList = pads.data.reduce((obj, item) => {
      obj[`/launchpad/${item.id}`] = { page: '/pad', query: { site: item.id } };
      return obj;
    }, {});

    const rockets = await axios.get('https://api.spacexdata.com/v2/rockets');
    const rocketList = rockets.data.reduce((obj, item) => {
      obj[`/rockets/${item.id}`] = { page: '/rocket', query: { rocket: item.id } };
      return obj;
    }, {});

    return {
      '/': { page: '/' },
      ...launchList,
      ...padList,
      ...rocketList,
    };
  },
};
