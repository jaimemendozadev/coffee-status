export const SELECT_TOPPINGS = 'SELECT_TOPPINGS';

export const selectToppings = (toppings, quantity) => {
  const payload = [toppings, quantity];

  return {
    type: SELECT_TOPPINGS,
    payload
  }

}