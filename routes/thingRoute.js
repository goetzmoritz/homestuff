const express = require('express')
const router = express.Router()
const Thing = require('../models/thingModel')

router.get('/', async (req, res) => {
    try {
        const thing = await Thing.find()
        res.json(thing)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one thing
router.get('/:id', async (req, res, next) => {
    try {
        thing = await Thing.findById(req.params.id).exec()
        if (thing == null) {
            return res.status(404).json({ message: 'Cant find thing' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.thing = thing
    res.json(res.thing)
    next()
})

// Create one thing
router.post('/', async (req, res) => {
    console.log(req.body)
    const thing = new Thing({
        name: req.body.name,
        location: req.body.location
    })

    try {
        const newThing = await thing.save()
        res.status(201).json(newThing)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update one thing
router.patch('/:id', async (req, res) => {
})

// Delete one thing
router.delete('/:id', async (req, res) => {
})

module.exports = router