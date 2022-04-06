import { getCards } from './getCards';

describe('getCards test', () => {
  test('fetch', async () => {
    const data = await getCards();

    console.log(data);
    expect(data).toBeTruthy();
  });
});
