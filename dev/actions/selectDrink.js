export const SELECT_DRINK = 'SELECT_DRINK';

export const selectDrink = drink => {
  return {
    type: SELECT_DRINK,
    payload: drink
  }
}