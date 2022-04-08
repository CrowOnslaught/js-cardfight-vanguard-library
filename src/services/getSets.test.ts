import { getSets } from '../index';

describe('getSets test', () => {
  test('fetch card', async () => {
    const response = await getSets();
    expect(response).toBeTruthy();
    expect(response.error).toBeFalsy();
  });
});
