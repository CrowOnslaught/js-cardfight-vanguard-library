import { getCards, getCard } from './getCards';

describe('getCards test', () => {
  test('fetch cards', async () => {
    const response = await getCards();

    expect(response).toBeTruthy();
    expect(response.length).toBe(50);
  });
  test('fetch card', async () => {
    const response = await getCard({id:"1"});
    expect(response).toBeTruthy();
  });
});
