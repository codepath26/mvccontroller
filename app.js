  const express = require("express");
  const bodyParser = require("body-parser");
  const adminRoutes = require("./routes/admin")
  const shopRoutes =  require("./routes/shop")
  const path = require('path')
  const app = express();
  const rootDir = require('./utils/path')

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname,'public')))
  app.use(adminRoutes)
  app.use(shopRoutes)
  app.use((req,res)=>{
  res.status(404).sendFile(path.join(rootDir,'views','errorPage.html'))
  // res.status(404).sendFile(path.join(__dirname,'views','errorPage.html'))
  })
  app.listen(4000);
