const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema ({
    name : {
        type:String,
        require:true
    },

    email : {
        type:String,
        require:true
    },

    phone : {
        type:String,
        require:true
    },

    department : {
        type:String,
        require:true
    },

    salary : {
        type:String,
        require:true
    },

    createdAt:{
        type:String,
        default:new Date()
    }
})

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee ;