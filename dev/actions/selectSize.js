export const SELECT_SIZE = 'SELECT_SIZE';

export const selectSize = size => {
    const payload = size;
    
  return {
    type: SELECT_SIZE,
    payload 
  }
}