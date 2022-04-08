import { objectToQueryString } from '../helpers/utils';
const axios = require('axios').default;

const getCards = async (params?: Record<string, string>) => {
  try {
    let qs = params ? { ...params } : {};
    qs.page = qs.page || '1';

    const queryString = objectToQueryString(qs);
    const response = await axios.get(
      `https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/cards?${queryString}`
    );

    if (response.error) return { error: response.error };

    return response.data;
  } catch (e) {
    return { error: e };
  }
};

const getCard = async (id: number) => {
  try {
    const response = await axios.get(
      `https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/card?id=${id}`
    );

    if (response.error) return { error: response.error };

    return response;
  } catch (e) {
    return { error: e };
  }
};

export { getCards, getCard };
