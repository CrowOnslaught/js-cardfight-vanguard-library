import { getSets } from "./getSets";

describe('getSets test', () => {

  test('fetch card', async () => {
    const response = await getSets();
    console.log(response)
    expect(response).toBeTruthy();
  });
});
