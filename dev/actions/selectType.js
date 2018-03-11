export const SELECT_TYPE = 'SELECT_TYPE';

export const selectType = (temperature, name) => {
    const payload = [temperature, name]
    
  return {
    type: SELECT_TYPE,
    payload 
  }
}