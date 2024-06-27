var HumanCategory = require('../model/humanCategory');


exports.HumanCategoryCreate = async (req, res) => {

    try {
        let { humanCategory } = req.body

        let humanCategoryCreate = await HumanCategory.create({ humanCategory })

        res.status(201).json({
            status: 'Success',
            message: 'HumanCategory Create Successfully',
            data: humanCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.HumanCategoryFind = async (req, res) => {

    try {
       
        let humanCategoryFind = await HumanCategory.find()

        res.status(200).json({
            status: 'Success',
            message: 'HumanCategory Find Successfully',
            data: humanCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.HumanCategoryDelete = async (req, res) => {

    try {

        let humanCategoryId = req.params.humanCategoryId
       
        let humanCategoryDelete = await HumanCategory.findByIdAndDelete(humanCategoryId)

        if(!humanCategoryDelete)
            {
                throw new Error('HumanCategory Not Found')
            }

        res.status(301).json({
            status: 'Success',
            message: 'HumanCategory Delete Successfully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.HumanCategoryUpdate = async (req, res) => {

    try {

        let humanCategoryId = req.params.humanCategoryId
       
        let humanCategoryUpdate = await HumanCategory.findByIdAndUpdate(humanCategoryId, req.body, {new : true})

        if(!humanCategoryUpdate)
            {
                throw new Error('HumanCategory Not Found')
            }

        res.status(201).json({
            status: 'Success',
            message: 'HumanCategory Update Successfully',
            data: humanCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}