const getUserProfile = (req, res) => {
  console.log("reached getUserProfile", req.headers);
  res.send({message: "reached getUserProfile"});
}

module.exports = getUserProfile;