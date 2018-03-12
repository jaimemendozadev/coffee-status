export const SELECT_SWEETNESS = 'SELECT_SWEETNESS';

export const selectSweetness = (sweetness, quantity) => {
  const payload = [sweetness, quantity];

  return {
    type: SELECT_SWEETNESS,
    payload
  }
}