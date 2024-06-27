var express = require('express');
var router = express.Router();
var qualityCategoryController = require('../controller/qualityCategory')
var adminAuthentication = require('../authentication/admin')


router.post('/create', adminAuthentication.sequre, qualityCategoryController.QualityCategoryCreate);
router.get('/find', adminAuthentication.sequre, qualityCategoryController.QualityCategoryFind);
router.delete('/delete/:qualityCategoryId', adminAuthentication.sequre, qualityCategoryController.QualityCategoryDelete);
router.patch('/update/:qualityCategoryId', adminAuthentication.sequre, qualityCategoryController.QualityCategoryUpdate);

module.exports = router;
