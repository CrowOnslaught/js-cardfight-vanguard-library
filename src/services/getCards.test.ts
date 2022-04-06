import { getCards, getCard } from '../index';

describe('getCards test', () => {
  test('fetch cards', async () => {
    const response = await getCards();

    expect(response).toBeTruthy();
    expect(response.data.length).toBe(50);
  });
  test('fetch cards with params', async () => {
    const response = await getCards({grade:"0", clan:"Link Joker"});
    console.log(response);

    expect(response).toBeTruthy();
  });
  test('fetch card', async () => {
    const response = await getCard(1);
    expect(response).toBeTruthy();
  });
});
