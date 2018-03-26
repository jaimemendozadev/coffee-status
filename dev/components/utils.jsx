import React from 'react';
import SelectionPage from './CustomDrink/SelectionPage.jsx';
import SelectType from './CustomDrink/SelectType.jsx';
import SelectSize from './CustomDrink/SelectSize.jsx';
import SelectMilk from './CustomDrink/SelectMilk.jsx';
import SelectSweetness from './CustomDrink/SelectSweetness.jsx';
import SelectToppings from './CustomDrink/SelectToppings.jsx';
import ConfirmationPage from './CustomDrink/ConfirmationPage.jsx';
import { parse, format, AsYouType } from 'libphonenumber-js';



/**************************
* CustomDrink Render Logic
***************************/

export const renderPage = currentPage => {
  if(currentPage == 'selectionPage'){
    return <SelectionPage />
  }  

  if(currentPage == 'selectType'){
    return <SelectType />
  }
  
  if(currentPage == 'toggleSize'){
    return <SelectSize />      
  }  

  if(currentPage == 'toggleMilk'){  
    return <SelectMilk />
  }
  
  
  if(currentPage == 'toggleSweet'){  
    return <SelectSweetness />
  }  
  
  
  if(currentPage == 'toggleToppings'){  
    return <SelectToppings />
  }  
  
  
  if(currentPage == 'confirmationPage'){  
    return <ConfirmationPage />
  }

  if(!currentPage){
    return <h1>Waiting for data...</h1>
  }

}





/******************
* Form Functions
*******************/

export const validatePhoneNumber = phoneNumber => {
  let parsedPhone = parse(phoneNumber, 'US');

  return parsedPhone;
}


export const renderErrorMessage = state => {
  if (state.errorMessage){
    return <div>{state.errorMessage}</div>
  }
}

export const handleSubmit = (event, action, args = false) => {
  event.preventDefault();

  if (args) {
    action(args);
  } else {
    action();
  }
}


export const renderInputFields = (InputsArray, state, setStateCallback, callback, actionCallback, inputNameType) => (
  InputsArray.map((inputKey, idx) => {
    return (
      <label key={`${inputKey + idx}`}>{inputKey}
        <input
          type="checkbox"
          name={inputKey}
          checked={state[inputKey]}
          onClick={(event) => callback(event, state, setStateCallback, actionCallback, inputNameType)} />
      </label> 
    )
  })
)


export const handleInputChange = (event, state, setStateCallback, actionCallback, inputNameType) => {
  const {madeSelection} = state;
  
  let newState;

  //value is boolean that checks if input is clicked
  const value = event.target.checked;

  //get size from name attr 
  const key = event.target.name;


  //when nothing's been selected
  if (madeSelection == false){
    //make copy of old state
    newState = {...state}

    //update state
    newState[key] = value;
    newState.madeSelection = true;
    newState.errorMessage = null;

    setStateCallback(newState, () => actionCallback(key));
  }

  if (madeSelection) {

    //if you try to make more than one selection
    if (state[key] == false) {

      //make copy of old state
      newState = {...state};

      //update state
      newState.errorMessage = `Unclick the last selection to change the ${inputNameType}.`;

      setStateCallback(newState);

    } else {
      //make copy of old state
      newState = {...state}

      //update state
      newState[key] = value;
      newState.madeSelection = false;
      newState.errorMessage = null;

      
      setStateCallback(newState, () => actionCallback('')); 
    }
  }

}