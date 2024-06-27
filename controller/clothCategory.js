var ClothCategory = require('../model/clothCategory');


exports.ClothCategoryCreate = async (req, res) => {

    try {
        let { clothCategory, humanCategory } = req.body

        let clothCategoryCreate = await ClothCategory.create({ clothCategory, humanCategory })

        res.status(201).json({
            status: 'Success',
            message: 'ClothCategory Create Successfully',
            data: clothCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ClothCategoryFind = async (req, res) => {

    try {
       
        let clothCategoryFind = await ClothCategory.find().populate('humanCategory')

        res.status(200).json({
            status: 'Success',
            message: 'ClothCategory Find Successfully',
            data: clothCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ClothCategoryDelete = async (req, res) => {

    try {

        let clothCategoryId = req.params.clothCategoryId
       
        let clothCategoryDelete = await ClothCategory.findByIdAndDelete(clothCategoryId)

        if(!clothCategoryDelete)
            {
                throw new Error('ClothCategory Not Found')
            }

        res.status(301).json({
            status: 'Success',
            message: 'ClothCategory Delete Successfully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ClothCategoryUpdate = async (req, res) => {

    try {

        let clothCategoryId = req.params.clothCategoryId
       
        let clothCategoryUpdate = await ClothCategory.findByIdAndUpdate(clothCategoryId, req.body, {new : true})

        if(!clothCategoryUpdate)
            {
                throw new Error('ClothCategory Not Found')
            }

        res.status(201).json({
            status: 'Success',
            message: 'ClothCategory Update Successfully',
            data: clothCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
