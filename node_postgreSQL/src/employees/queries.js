//sql queries for database


const getEmployees = "SELECT * FROM employee_data"; //query all employes
const getEmployeesById = "SELECT * FROM employee_data WHERE id = $1"; //query for id
const checkEmailExists = "SELECT s FROM employee_data s WHERE s.email = $1"; //query for email
const addEmployee = "INSERT INTO employee_data(firstname,lastname,dept,title,email,salary, birthdate, joindate) VALUES ($1, $2,$3,$4,$5, $6,$7, $8)"; //ADD DATA PARAMS
const deleteEmployee = "DELETE FROM employee_data WHERE id = $1"; //delete by id query
const updateEmployee = "UPDATE employee_data SET firstname = $1, lastname = $2, dept = $3, title = $4, email = $5, salary = $6, birthdate = $7, joindate = $8 WHERE id = $9"; // update where firstname/id === id


//export object for reuse in controller
module.exports = {
    getEmployees,
    getEmployeesById,
    checkEmailExists,
    addEmployee,
    deleteEmployee,
    updateEmployee
}