var QualityCategory = require('../model/qualityCategory');


exports.QualityCategoryCreate = async (req, res) => {

    try {
        let { qualityCategory, clothCategory, humanCategory } = req.body

        let qualityCategoryCreate = await QualityCategory.create({ qualityCategory, clothCategory, humanCategory })

        res.status(201).json({
            status: 'Success',
            message: 'QualityCategory Create Successfully',
            data: qualityCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QualityCategoryFind = async (req, res) => {

    try {
       
        let qualityCategoryFind = await QualityCategory.find().populate(['clothCategory', 'humanCategory'])

        res.status(200).json({
            status: 'Success',
            message: 'QualityCategory Find Successfully',
            data: qualityCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QualityCategoryDelete = async (req, res) => {

    try {

        let qualityCategoryId = req.params.qualityCategoryId
       
        let qualityCategoryDelete = await QualityCategory.findByIdAndDelete(qualityCategoryId)

        if(!qualityCategoryDelete)
            {
                throw new Error('QualityCategory Not Found')
            }

        res.status(301).json({
            status: 'Success',
            message: 'QualityCategory Delete Successfully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QualityCategoryUpdate = async (req, res) => {

    try {

        let qualityCategoryId = req.params.qualityCategoryId
       
        let qualityCategoryUpdate = await QualityCategory.findByIdAndUpdate(qualityCategoryId, req.body, {new : true})

        if(!qualityCategoryUpdate)
            {
                throw new Error('QualityCategory Not Found')
            }

        res.status(201).json({
            status: 'Success',
            message: 'QualityCategory Update Successfully',
            data: qualityCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
