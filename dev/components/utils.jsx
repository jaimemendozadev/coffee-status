import React from 'react';
import SelectionPage from './CustomDrink/SelectionPage.jsx';
import SelectType from './CustomDrink/SelectType.jsx';
import SelectSize from './CustomDrink/SelectSize.jsx';
import SelectMilk from './CustomDrink/SelectMilk.jsx';
import SelectSweetness from './CustomDrink/SelectSweetness.jsx';
import SelectToppings from './CustomDrink/SelectToppings.jsx';
import ConfirmationPage from './CustomDrink/ConfirmationPage.jsx';

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