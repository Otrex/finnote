
const mongoose = require('mongoose')
const timestamp = require('./plugins/timestamp')
// Role Schema
const FinanceSchema = new mongoose.Schema({ 
    amount : {
        type: String,
        required: false
    },
    type : {
        type: String,
        required: false
    },
    category : {
    	type: String,
        required: false
    }
}); 

FinanceSchema.plugin(timestamp)
const Finance = mongoose.model('Finance', FinanceSchema)


module.exports = { Finance, FinanceSchema }