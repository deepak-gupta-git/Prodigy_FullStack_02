const express = require("express")
const router = express.Router();
const authController = require("../Controllers/auth-controller")
const employeeController = require("../Controllers/employee-controller")

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);
router.route("/employee").post(employeeController.createEmployee);
router.route("/employee").get(employeeController.getAllEmployee);
router.route("/employee/:id").get(employeeController.getEmployeeById);
router.route("/employee/:id").delete(employeeController.deleteEmployee);
router.route("/employee/:id").put(employeeController.updateEmployee);


module.exports = router;