//These controllers are for the Event model

//DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event } = db

//FIND ALL OF THE EVENTS AND ORDER THEM BY ASCENDING DATE - The Index Route
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['event_day', 'ASC']]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT USING AN ID - The Show Route
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {event_id: req.params.id}
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// ADD A NEW EVENT - The Create Route
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            data: newEvent,
            message: `New event added in successfuly! :D`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE EVENT INFO USING AN ID - The Update Route
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(
            req.body,
            {where: {event_id: req.params.id}})
        res.status(200).json({
            message: `${updatedEvents} event(s) updated successfully! :D`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE A EVENT USING AN ID - The Delete Route
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {event_id: req.params.id}
        })
        res.status(200).json({
            message: `${deletedEvent} event(s) deleted successfully... ;(`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = events