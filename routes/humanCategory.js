var express = require('express');
var router = express.Router();
var humanCategoryController = require('../controller/humanCategory')
var adminAuthentication = require('../authentication/admin')


router.post('/create', adminAuthentication.sequre, humanCategoryController.HumanCategoryCreate);
router.get('/find', adminAuthentication.sequre, humanCategoryController.HumanCategoryFind);
router.delete('/delete/:humanCategoryId', adminAuthentication.sequre, humanCategoryController.HumanCategoryDelete);
router.patch('/update/:humanCategoryId', adminAuthentication.sequre, humanCategoryController.HumanCategoryUpdate);

module.exports = router;
