# ts-cardfight-vanguard-api

![coverage-functions](https://raw.githubusercontent.com/CrowOnslaught/js-cardfight-vanguard-library/master/coverage/badge-functions.svg)
![coverage-lines](https://raw.githubusercontent.com/CrowOnslaught/js-cardfight-vanguard-library/master/coverage/badge-lines.svg)
![license](https://img.shields.io/github/license/crowonslaught/js-cardfight-vanguard-library)
[![downloads](https://img.shields.io/npm/dt/ts-cardfight-vanguard-api)](https://www.npmjs.com/package/ts-cardfight-vanguard-api)
[![version](https://img.shields.io/npm/v/ts-cardfight-vanguard-api)](https://www.npmjs.com/package/ts-cardfight-vanguard-api)
[![coffe](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellowgreen)](https://www.buymeacoffee.com/CrowOnslaught)

## introduction

A typescript based library that fetches data (using [axios](https://www.npmjs.com/package/axios)) from [card-fight-vanguard-api](https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/docs) created by [Brent Pappas](https://pappasbrent.com).
Look at his documentation for more information.

## install

```
npm install ts-cardfight-vanguard-api
```

## Docs

### Get cards

Returns an Object with an array of 50 cards and pagination data from the API. the page by default is `1`.

```
import { getCards } from 'ts-cardfight-vanguard-api';

const response = await getCards();
console.log(response);
//{ data: Array[50], paging: { page: 1, pagesize: 50 } }
```

```
import { getCards } from 'ts-cardfight-vanguard-api';

const params = {grade: "0", clan: "Link Joker", page: 3};
const response = await getCards(params);
console.log(response);
// { data: Array[50], paging: { page: 3, pagesize: 50 } }
```

### Get card

Returns a card from the api. It allows parameters with provided `id`

```
import { getCard } from 'ts-cardfight-vanguard-api';

const data = await getCards(1);
console.log(data)
// { name, clan, grade, ... }

```

### Get Sets

return an array with the name of all the available sets from the API.

```
import { getSets } from 'ts-cardfight-vanguard-api';
const response = await getSets();
console.log(response);
// ["Extra Booster: Divas Duet", "Booster Set 8: Blue Storm Armada", ...]
```

## Depencences

- [Brent Papas CardFight Vanguard Api](https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/docs)
- [Axios](https://www.npmjs.com/package/axios)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Jest](https://www.npmjs.com/package/jest)

## Credits

Thanks to [Brent Pappas](https://pappasbrent.com) for creating this elaborated API that allows this package to exist.
