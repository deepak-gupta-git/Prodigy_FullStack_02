const Employee = require("../Model/Employee-model")
// const mongoose = require("mongoose")

const createEmployee = async (req, res) => {
    try {
        const {name ,email,phone, department, salary} = req.body;
        const userExist = await Employee.findOne({email});
        if(userExist) {
         return res.status(400).json({msg : "Email Already Exist"})
        }
       const employeeData =  await Employee.create ({name ,email,phone, department, salary});
       res.status(200).json({msg : "Added Successfully", 
       })
       console.log(employeeData);
    } catch (error) {
        console.log(error)
    }
}

const getAllEmployee = async (req, res) => {
    try {
       const employeeData =  await Employee.find ({});
       res.status(200).json({msg : "Employees Details", 
        data:employeeData
       })

    } catch (error) {
        console.log(error)
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const {id} = req.params;
       const emp =  await Employee.findOne({_id : id});
       res.status(200).json({msg : "Get Employee Details", 
        data:emp
       })

    } catch (error) {
        console.log(error)
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
       const emp =  await Employee.findByIdAndDelete({_id : id});
       res.status(200).json({msg : "Deleted Successfully Details", 
        data:emp
       })

    } catch (error) {
        console.log(error)
    }
}


const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, department, salary } = req.body;

        const employeeUpdatedData = await Employee.findByIdAndUpdate(
            id, 
            { name, email, phone, department, salary }, 
            { new: true } 
        );

        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).json({ error: "Invalid Employee ID" });
        // }

        
        // if (!employeeUpdatedData) {
        //     return res.status(404).json({ error: "Employee not found" });
        // }

        console.log("Updated Employee:", employeeUpdatedData);
        res.status(200).json({
            msg: "Updated Successfully",
            data: employeeUpdatedData
        });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    deleteEmployee,
    updateEmployee
}