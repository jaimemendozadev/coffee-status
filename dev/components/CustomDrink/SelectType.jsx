import React, {Component} from 'react';
import {connect} from 'react-redux';


class SelectionType extends Component {
  
  render() {
    return (
      <div>
        <h1>What cup o' Joe would you like?</h1>
        <form>
          <h1>Iced</h1>
          <h2>Hot</h2>
        </form>
      </div>
    )
  }
}
  


export default connect(null, null)(SelectionType);