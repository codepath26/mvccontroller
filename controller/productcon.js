
const path = require('path')
const rootDir = require('../utils/path')

const product1 = (req, res, next) => {
  res.sendFile(path.join(__dirname , '../' , 'views', 'add-products.html'));  
}
const product2 = (req, res) => {
  console.log(req.body.item);
  res.redirect("/");
}
const obj = {
  proget : product1,
  propost : product2
}
module.exports = obj;