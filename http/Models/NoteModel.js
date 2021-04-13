
const mongoose = require('mongoose')
const timestamp = require('./plugins/timestamp')
// Role Schema
const NoteSchema = new mongoose.Schema({ 
    title : {
        type: String,
        required: false
    },
    content : {
        type: String,
        required: false
    },
}); 

NoteSchema.plugin(timestamp)
const Note = mongoose.model('Note', NoteSchema)


module.exports = { Note, NoteSchema }