//store employee routes 
const { Router } = require('express');
//creating router object
const router = Router();
//import controller getEmployees
const controller = require('../controller/controller')

/*   */


/* add routes get all employees */

//get all employees
router.get('/', controller.getEmployees);

//get employee by id
router.get('/:id', controller.getEmployeesById)

//post employee by id route
router.post("/", controller.addEmployee)

//delete employee by id
router.delete('/:id', controller.deleteEmployee)

//edit employee by id
router.put('/:id', controller.updateEmployee)

//export router
module.exports = router