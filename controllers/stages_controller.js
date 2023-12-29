//These controllers are for the Stage model

// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// FIND ALL OF THE STAGES - The Index Route
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC STAGE USING AN ID - The Show Route
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: {stage_id: req.params.id}
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})
// ADD A NEW STAGE - The Create Route
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            data: newStage,
            message: "New stage added in successfully! :D"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
// UPDATE STAGE INFO USING AN ID - The Update Route
stages.put('/:id', async(req, res) => {
    try {
        const updatedStages = await Stage.update(
            req.body,
            {where: {stage_id: req.params.id}}
        )
        res.status(200).json({
            message: `${updatedStages} stage(s) updated successfully! :D`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
// DELETE A STAGE USING AN ID - The Delete Route
stages.delete('/:id', async (req, res) => {
    try {
        const removedStage = await Stage.destroy({
            where: {stage_id: req.params.id}
        })
        res.status(500).json({
            message: `${removedStage} stage(s) removed successfully... ;(`
        })
    } catch (error) {
        res.status(200).json(error)
    }
})




module.exports = stages