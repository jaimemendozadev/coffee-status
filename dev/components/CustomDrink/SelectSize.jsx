import React, {Component} from 'react';

class SelectSize extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Short": false,
      "Small": false,
      "Medium": false,
      "Large": false,
      "X-Large": false
    }
  }
  render(){
    return (
      <h1>SelectSize</h1>
    )
  }
}

export default SelectSize;