const getUserProfile = (req, res) => {
  const {user} = req; 

  const userProfile = {
    first_name: user.first_name,
    last_name: user.last_name,
    profile_image_url: user.profile_image_url,
    email: user.email,  
  }


  res.json(userProfile);
}

module.exports = getUserProfile;