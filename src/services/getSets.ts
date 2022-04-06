const axios = require('axios').default;


const getSets = async () => {
  try {
    const response = await axios.get(
      `https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/sets`
    );
    return response.data.sets;
  } catch {
    return 'error';
  }
};

export { getSets };
