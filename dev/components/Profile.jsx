import React from 'react';

const Profile = ({fetchedUser: {first_name, last_name, profile_image_url, email, phone_number} }) => (
  <div>
    <h1>Welcome {first_name} {last_name}!</h1>
    <div>
      <h2>Contact Info</h2>
      <ul>
        <li>Current Email: {email}</li>
        <li>Current Phone Number: {phone_number}</li>
      </ul>
    </div>
  </div>
)

export default Profile;