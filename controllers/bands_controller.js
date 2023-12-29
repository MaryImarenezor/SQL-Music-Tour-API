//These controllers are for the Band model

// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band } = db

// FIND ALL OF THE BANDS - The Index Route
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND - The Show Route
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: {band_id: req.params.id}
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A NEW BAND - The Create Route
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            data: newBand,
            message: "New Band added Successfully! :D"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATING A BAND - The Update Route
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(
            req.body,
            {where: {band_id: req.params.id}}
        )
        res.status(200).json({
            message: `${updatedBands} band(s) updated Successfully! :D`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//REMOVING A BAND - The Delete Route
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {band_id: req.params.id}
        })
        res.status(200).json({
            message: `${deletedBands} band(s) was deleted successfully.... ;(`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})





module.exports = bands