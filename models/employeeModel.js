const mongoose = require("mongoose")

//-SCHEMA
const employeeSchema = mongoose.Schema({
    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    email : {
        type: String,
        required: 'Email address is required'
    },
    contact : {
        type: Number,
        min: 10,
        required: 'Contact is required',
        unique: true
    },
    password : {
        type: String,
        min: 5,
        required: 'Password is required',
        unique: true
    }

})

//--MODEL
const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;