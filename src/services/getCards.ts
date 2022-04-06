import { objectToQueryString } from '../helpers/utils';
const axios = require('axios').default;

const getCards = async (page?: number) => {
  try {
    const response = await axios.get(
      `https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/cards?page=${
        page || 1
      }`
    );
    console.log(response);
    return response;
  } catch {
    return 'error';
  }
};

const getCard = async (params: Record<string, string>) => {
  try {
    const qs = objectToQueryString(params);
    const response = await axios.get(
      `https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/card?${qs}`
    );
    console.log(response);
    return response;
  } catch {
    return 'error';
  }
};

export { getCards, getCard };
