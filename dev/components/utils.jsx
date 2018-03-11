import React from 'react';

import SelectionPage from './CustomDrink/SelectionPage.jsx';
import SelectType from './CustomDrink/SelectType.jsx';
import SelectSize from './CustomDrink/SelectSize.jsx';


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


  /*
  if(currentPage == 'toggleMilk'){  
  }  
  if(currentPage == 'toggleSweet'){  
  }  
  if(currentPage == 'toggleToppings'){  
  }  
  if(currentPage == 'confirmationPage'){  
  }
  */

}