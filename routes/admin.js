const express = require('express')
const router = express.Router()
const path = require('path')
// import {productCon} from '../controller/productcon'
const productcon= require('../controller/productcon')
const sucrescon= require('../controller/contactus')
const rootDir = require('../utils/path')
router.get("/add-product",productcon.proget);
router.get("/contactus",sucrescon.conget );
router.post("/product",productcon.propost);
router.post("/success",sucrescon.sucpost);
module.exports = router;