const express = require('express')
const router = express.Router();
const path = require('path')
const maindis = require('../controller/main')
router.get("/",maindis);
module.exports = router;