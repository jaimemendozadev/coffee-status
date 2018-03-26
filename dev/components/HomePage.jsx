import React, {Component} from 'react';
import CustomDrink from './CustomDrink/index.jsx';
import Profile from './Profile.jsx';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/FetchUser.js';
import styles from '../main.scss';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.checkUserStatus = this.checkUserStatus.bind(this);
  }

  checkUserStatus(User){
    if(User.fetchedUser == false){
      return <h1>Waiting to fetch User data...</h1>;      
    }

    if (User.fetchedUser){
      return (
        <div>
        <Profile fetchedUser={User} />
        <Link to='/customdrink'>Click to Create your CustomDrink!</Link>
        </div>
      )
    }

    if (User.server.error){
      return <h1>{User.server.message}</h1>
    }
  }

  componentDidMount(){
    const {fetchUser} = this.props;
    
    fetchUser();
  }

  render() {
    const {isAuthenticated, User} = this.props;
    console.log("the User is ", User);
    return (
      <div>
        <div>
          <h1>Welcome to CoffeeStatus: Create a Custom Drink</h1>
          {this.checkUserStatus(User)}
        </div>
      </div>
    )
  }
}
function mapStateToProps({ Authentication: {isAuthenticated}, User }){
  return {
    isAuthenticated,
    User
  }
}
export default connect(mapStateToProps, {fetchUser})(HomePage);