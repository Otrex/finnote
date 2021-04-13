
const _ = require("lodash")
const route = require('express').Router()

// Helpers
const catchAsync = require('../services/core/CatchAsync')

// Controller
const FinanceController = require('../http/Controllers/FinanceController')

route.get('/get/:id', FinanceController.getFinance)

route.get('/get/where/', FinanceController.getFinanceByOptions)

route.get('/get/', FinanceController.getAllFinances)

route.put('/update/:id', FinanceController.updateFinance)

route.delete('/delete/:id', FinanceController.deleteFinance)

route.delete('/delete', FinanceController.deleteAll)


module.exports = route