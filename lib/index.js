//https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/docs
import { getCards, getCard } from './services/getCards';
import { getSets } from './services/getSets';
export { getCards, getCard, getSets };
var card = getCard({ id: "22" });
console.log(card);
//# sourceMappingURL=index.js.map