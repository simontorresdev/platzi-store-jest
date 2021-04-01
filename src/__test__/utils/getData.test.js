import getData from '../../utils/getData';

describe('Test api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar un api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://www.google.com.co/')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com.co/');

  });
});
