import actions from '../../actions';
import ProductMook from '../../__mocks__/ProductMook';

describe('Actions', () => {

  test('addToCart Action', () => {
    const payload = ProductMook;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeToCart Action', () => {
    const payload = ProductMook;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
