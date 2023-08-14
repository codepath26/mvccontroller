
const path = require('path');
const rootDir = require('../utils/path');

const mainpass = (req, res, next) => {
  console.log(req.body.item, "this");
  // res.sendFile(path.join(__dirname,'../','views','shop.html'))
  res.sendFile(path.join(rootDir,'views','shop.html'))
}

module.exports = mainpass;