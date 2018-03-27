const createCustomDrink = require('./createCustomDrink.js');
const generateSendToken = require('./generateSendToken');
const placeAnOrder = require('./placeAnOrder.js');
const sendStaticAssets = require('./sendStaticAssets.js');
const getUserProfile = require('./getUserProfile.js');
const updateUserProfile = require('./updateUserProfile.js');

module.exports = {
  createCustomDrink,    
  generateSendToken,
  placeAnOrder,
  sendStaticAssets,
  getUserProfile,
  updateUserProfile
}