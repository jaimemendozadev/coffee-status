import React from 'react';

import SelectionPage from './CustomDrink/SelectionPage.jsx';
import SelectType from './CustomDrink/SelectType.jsx';
import SelectSize from './CustomDrink/SelectSize.jsx';
import SelectMilk from './CustomDrink/SelectMilk.jsx';
import SelectSweetness from './CustomDrink/SelectSweetness.jsx';


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
  
  /*
  if(currentPage == 'toggleToppings'){  
  }  
  if(currentPage == 'confirmationPage'){  
  }
  */

}