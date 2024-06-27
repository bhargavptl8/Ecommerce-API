var Product = require('../model/product');


exports.ProductCreate = async (req, res) => {

    try {
        let { productImage, productTitle, productDescription, productPrice, qualityCategory, clothCategory, humanCategory } = req.body

        productImage = req.files.map(el => el.filename)

        let productCreate = await Product.create({ productImage, productTitle, productDescription, productPrice, qualityCategory, clothCategory, humanCategory })

        res.status(201).json({
            status: 'Success',
            message: 'Product Create Successfully',
            data: productCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ProductFind = async (req, res) => {

    try {

        let productFind = await Product.find().populate(['qualityCategory', 'clothCategory', 'humanCategory'])

        res.status(200).json({
            status: 'Success',
            message: 'Product Find Successfully',
            data: productFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ProductDelete = async (req, res) => {

    try {

        let productId = req.params.productId

        let productDelete = await Product.findByIdAndDelete(productId)

        if (!productDelete) {
            throw new Error('Product Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'Product Delete Successfully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ProductUpdate = async (req, res) => {

    try {

        let { productImage, productTitle, productDescription, productPrice, qualityCategory, clothCategory, humanCategory } = req.body

        let productId = req.params.productId

        let find = await Product.findById(productId)

        if (!req.files.length) {
            productImage = find?.productImage
        }
        else {
            productImage = req.files?.map(el => el.filename)
        }

        if (!productTitle) {
            productTitle = find?.productTitle
        }

        if (!productDescription) {
            productDescription = find?.productDescription
        }

        if (!productPrice) {
            productPrice = find?.productPrice
        }

        if (!qualityCategory) {
            qualityCategory = find?.qualityCategory
        }

        if (!clothCategory) {
            clothCategory = find?.clothCategory
        }

        if (!humanCategory) {
            humanCategory = find?.humanCategory
        }


        let productUpdate = await Product.findByIdAndUpdate(productId, { productImage, productTitle, productDescription, productPrice, qualityCategory, clothCategory, humanCategory }, { new: true })

        if (!productUpdate) {
            throw new Error('Product Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'Product Update Successfully',
            data: productUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}