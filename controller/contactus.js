const path = require('path')
const rootDir = require('../utils/path')

const product1 =(req, res, next) => {
  res.sendFile(path.join(rootDir , 'views', 'contactus.html'));  
  // res.sendFile(path.join(__dirname , '../' , 'views', 'contactus.html'));  
}
const product2 =(req, res) => {
  console.log("Data added successful")
   res.redirect("/");
  }
const obj = {
  conget : product1,
  sucpost : product2
}
module.exports = obj;