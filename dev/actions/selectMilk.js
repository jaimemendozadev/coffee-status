export const SELECT_MILK = 'SELECT_MILK';

export const selectMilk = milk => {
  return {
    type: SELECT_MILK,
    payload: milk
  }
}