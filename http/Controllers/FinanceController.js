const { Finance } = require('../Models/FinanceModel')
const _ = require("lodash")

// Helpers
const catchAsync = require('../../services/core/CatchAsync')
const { RequestError } = require('../../services/Exceptions')

exports.addFinance = catchAsync(async (req, res, next)=> {
	let finance = _.pick(req.body, ['title', 'content'])
	req.user.populate(['finances'])
	req.user.finances.push(new Finance ({ ...Finance	}))
	await req.user.save()
	res.status(200).json({
		message : "Record Saved..",
		status: "Ok"
	})
})

exports.deleteFinance = catchAsync(async (req, res, next)=>{
	
	let id = req.params.id
	let finances = req.user.finances
	if (!finances.find(finance=>finance._id == id)) throw new RequestError("Then Finance Doesnt Exist")
	req.user.finances.pull(id)
	await req.user.save()
	res.status(200).json({
		message: "Record Deleted",
		status : "ok"
	})
})

exports.updateFinance = catchAsync(async(req, res, next)=>{
	let finances = req.user.finances
	let id = req.params.id
	let finance = finances.find(finance=>finance._id == id)

	if (!finance) throw new RequestError("Record not Found")

	await finance.update(req.body)

	await finance.save()
	res.status(200).json({
		message : `Record :${finance._id} has been updated`,
		status:"ok"
	})
})

exports.getFinance = (req, res, next)=>{
	let finance = finances.find(finance => finance._id == id)
	if (!finance) throw new RequestError("Record not Found")
	res.status(200).json({
		data : finance,
		status : "ok"
	})
}

exports.getFinanceByOptions = catchAsync(async(req, res, next)=>{
	let qs = req.query
	let result = []

	for (q in qs) {
		result = finances.filter(finance=>finance[q] == qs[q])
	}

	res.status(200).json({
		data : result,
		status : "ok"
	})
})

exports.getAllFinances = (req, res) => {
	res.status(200).json({
		data : req.user.finances,
		status : "ok"
	})
}

exports.deleteAll = catchAsync (async(req, res, next)=>{
	let finances = req.user.finances
	finances.slice(0, Finances.length)
	await req.user.save()
	res.status(200).json({
		message: "Records Deleted",
		status : "ok"
	})
})