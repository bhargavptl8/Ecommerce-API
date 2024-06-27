var express = require('express');
var router = express.Router();
const multer = require('multer')
var productController = require('../controller/product')
var adminAuthentication = require('../authentication/admin')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

const fileValidation = (req, res, next) => {

    try {

        if (req.files.length < 3) {
            throw new Error('Min 3 Image Attach');
        }
        else if(req.files.length > 3){
            throw new Error('Max 3 Image Attach');
        }

        next()

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }

}

router.post('/create', adminAuthentication.sequre, upload.array('productImage'), fileValidation, productController.ProductCreate);
router.get('/find', adminAuthentication.sequre, productController.ProductFind);
router.delete('/delete/:productId', adminAuthentication.sequre, productController.ProductDelete);
router.patch('/update/:productId', adminAuthentication.sequre, upload.array('productImage'), productController.ProductUpdate);

module.exports = router;
