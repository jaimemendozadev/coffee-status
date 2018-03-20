const path = require('path');

const sendStaticAssets = (req, res) => {
  const public = path.resolve(__dirname, '../../../public/index.html');
  res.sendFile(public)
}

module.exports = sendStaticAssets;

