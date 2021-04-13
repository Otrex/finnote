
const _ = require("lodash")
const route = require('express').Router()

// Helpers
const catchAsync = require('../services/core/CatchAsync')

// Controller
const NoteController = require('../http/Controllers/NoteController')

route.get('/:id', NoteController.getNote)

route.get('/', NoteController.getAllNotes)

route.put('/update/:id', NoteController.updateNote)

route.delete('/delete/:id', NoteController.deleteNote)

route.delete('/delete', NoteController.deleteAll)


module.exports = route