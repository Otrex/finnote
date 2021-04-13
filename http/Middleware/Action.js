
const catchAsync = require('../../services/core/CatchAsync')
const { RequestError } = require('../../services/Exceptions')

exports.populate = (field) => {
	return catchAsync(async (req, res, next) => {
		if (!req.user) throw new RequestError('User Not Authenticated')
		await req.user.populate([field])
		next()
	})
}
