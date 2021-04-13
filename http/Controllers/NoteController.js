const { Note } = require('../Models/NoteModel')
const _ = require("lodash")

// Helpers
const catchAsync = require('../../services/core/CatchAsync')
const { RequestError } = require('../../services/Exceptions')

exports.addNote = catchAsync(async (req, res, next)=> {
	let note = _.pick(req.body, ['title', 'content'])
	req.user.populate(['notes'])
	req.user.notes.push(new Note ({ ...note	}))
	await req.user.save()
	res.status(200).json({
		message : "Note Saved..",
		status: "Ok"
	})
})

exports.deleteNote = catchAsync(async (req, res, next)=>{
	
	let id = req.params.id
	let notes = req.user.notes
	if (!notes.find((note)=>note._id == id)) throw new RequestError("Then Note Doesnt Exist")
	req.user.notes.pull(id)
	await req.user.save()
	res.status(200).json({
		message: "Note Deleted",
		status : "ok"
	})
})

exports.updateNote = catchAsync(async(req, res, next)=>{
	let notes = req.user.notes
	let id = req.params.id
	let note = notes.find((note)=>{note._id == id})

	if (!note) throw new RequestError("Note not Found")

	await note.update(req.body)

	await note.save()
	res.status(200).json({
		message : `Note :${note._id} has been updated`,
		status:"ok"
	})
})

exports.getNote = (req, res, next)=>{
	let note = notes.find((note)=>{note._id == id})
	if (!note) throw new RequestError("Note not Found")
	res.status(200).json({
		data : note,
		status : "ok"
	})
}

exports.getAllNotes = (req, res) => {
	res.status(200).json({
		data : req.user.notes,
		status : "ok"
	})
}

exports.deleteAll = catchAsync (async(req, res, next)=>{
	let notes = req.user.notes
	notes.slice(0, notes.length)
	await req.user.save()
	res.status(200).json({
		message: "Notes Deleted",
		status : "ok"
	})
})