import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {

  render() {
    console.log("this.props inside App ", this.props)
    return (
      <div className="container">
        <div className="landing-header">
          <h1>Welcome to CoffeeStatus</h1>
        </div>

        <div className="landing-login">
          <p>Please go to the Login page to use our site.</p>
          <Link to="/login">Login</Link>
        </div>

        <div className="landing-directions">
          <h1>How It Works</h1>
          <ol>
            <li>Sign into the app with your Google account.</li>
            <li>Fill out the forms to create your favorite custom drink.</li>
            <ul>
              <li>We'll save your custom order in our system for your future orders!</li>
            </ul>

            <li>Save the order and we'll send a phone number to your smartphone. Save the number and whenever you want to order your custom drink, send a text to the phone number and it'll be ready in 15 minutes!</li>
          </ol>
         
        </div>

      </div>
    )
  }
}

export default LandingPage;