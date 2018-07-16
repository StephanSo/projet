var express = require('express');
var router = express.Router();

var adminController = require('../../controller/admin/adminController');

/* GET home page. */
router.get('/', adminController.indexAdmin);

module.exports = router;
