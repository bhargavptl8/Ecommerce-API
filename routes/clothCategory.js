var express = require('express');
var router = express.Router();
var clothCategoryController = require('../controller/clothCategory')
var adminAuthentication = require('../authentication/admin')


router.post('/create', adminAuthentication.sequre, clothCategoryController.ClothCategoryCreate);
router.get('/find', adminAuthentication.sequre, clothCategoryController.ClothCategoryFind);
router.delete('/delete/:clothCategoryId', adminAuthentication.sequre, clothCategoryController.ClothCategoryDelete);
router.patch('/update/:clothCategoryId', adminAuthentication.sequre, clothCategoryController.ClothCategoryUpdate);

module.exports = router;
