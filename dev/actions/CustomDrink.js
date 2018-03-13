export const GO_BACK_TO = 'GO_BACK_TO';

export const goBackTo = (page) => {
  return {
    type: GO_BACK_TO,
    payload: page 
  }
}





/*****************************
* Select Drink: Coffee or Tea
******************************/

export const SELECT_DRINK = 'SELECT_DRINK';

export const selectDrink = drink => {
  return {
    type: SELECT_DRINK,
    payload: drink
  }
}

export const RENDER_SELECT_TYPE = 'RENDER_SELECT_TYPE';

export const renderSelectType = () => {
  return {
    type: RENDER_SELECT_TYPE,
    payload: 'selectType'
    
  }
}



/***********************************
* Select Drink Temperature and Name
***********************************/

export const SELECT_TYPE = 'SELECT_TYPE';

export const selectType = (temperature, name) => {
    const payload = [temperature, name]
    
  return {
    type: SELECT_TYPE,
    payload 
  }
}

export const RENDER_SELECT_SIZE = 'RENDER_SELECT_SIZE';

export const renderSelectSize = () => {
  return {
    type: RENDER_SELECT_SIZE,
    payload: 'toggleSize'
    
  }
}


/***************
* Select a Size
***************/

export const SELECT_SIZE = 'SELECT_SIZE';

export const selectSize = size => {
    const payload = size;
    
  return {
    type: SELECT_SIZE,
    payload 
  }
}

export const RENDER_SELECT_MILK = 'RENDER_SELECT_MILK';

export const renderSelectMilk = () => {
  return {
    type: RENDER_SELECT_MILK,
    payload: 'toggleMilk'
    
  }
}


/*****************
* Select Milk Type
******************/

export const SELECT_MILK = 'SELECT_MILK';

export const selectMilk = milk => {
  return {
    type: SELECT_MILK,
    payload: milk
  }
}

export const RENDER_SELECT_SWEETNESS = 'RENDER_SELECT_SWEETNESS';

export const renderSelectSweetness = () => {
  return {
    type: RENDER_SELECT_SWEETNESS,
    payload: 'toggleSweet'
  }
}



/************************
* Select Sweetness Level
*************************/

export const SELECT_SWEETNESS = 'SELECT_SWEETNESS';

export const selectSweetness = (sweetness, quantity) => {
  const payload = (sweetness == 'No Sweetness') ? [sweetness] : [sweetness, quantity];

  return {
    type: SELECT_SWEETNESS,
    payload
  }
}

export const RENDER_SELECT_TOPPINGS = 'RENDER_SELECT_TOPPINGS';

export const renderSelectToppings = () => {
  return {
    type: RENDER_SELECT_TOPPINGS,
    payload: 'toggleToppings'
  }
}


/*******************************************
* Select Toppings, Render Confirmation Page
********************************************/

export const SELECT_TOPPINGS = 'SELECT_TOPPINGS';

export const selectToppings = (toppings, quantity) => {
  const payload = (toppings == 'No Toppings') ? [toppings] : [toppings, quantity];

  return {
    type: SELECT_TOPPINGS,
    payload
  }

}

export const RENDER_CONFIRMATION = 'RENDER_CONFIRMATION';

export const renderConfirmation = () => {
  return {
    type: RENDER_CONFIRMATION,
    payload: 'confirmationPage'
  }
}