export const RENDER_SELECT_TOPPINGS = 'RENDER_SELECT_TOPPINGS';

export const renderSelectToppings = () => {
  return {
    type: RENDER_SELECT_TOPPINGS,
    payload: 'toggleToppings'
  }
}