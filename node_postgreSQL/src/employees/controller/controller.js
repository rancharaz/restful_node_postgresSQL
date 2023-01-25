//business logic file
//db connection
const pool = require('../../../db')

//sql queries statement with object
const queries = require('../queries')

/*  */


///get all employees logic
const getEmployees = (req, res) => {
    //using pool to query data
    pool.query(queries.getEmployees, (error, results) => {
        //catching error && successfull query
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//get Employee by id
const getEmployeesById = (req, res) => {
    //get id out of url
    const id = parseInt(req.params.id);
    //use id to query statement && queries... sql statement && 
    pool.query(queries.getEmployeesById, [id], (error, results) => {
        //catching error && successfull query
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//add employee method

const addEmployee = (req, res) => {
    //destructuring method // req.body obj has values init 
    const { firstname, lastname, dept, title, email, salary, birthdate, joindate } = req.body;
    //check if email exist in db // validation
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists")
        }
        //add employee to db
        const id = parseInt(req.params.id);

        pool.query(queries.addEmployee, [firstname, lastname, dept, title, email, salary, birthdate, joindate], (error, results) => {
            if (error) throw error;
            res.status(201).send("Employee Created Successfully")
        })

    })

}

//delete employee by id

const deleteEmployee = (req, res) => {
    //get id from url
    const id = parseInt(req.params.id);
    //check for id 
    pool.query(queries.getEmployeesById, [id], (error, results) => {
        //if employee not found return
        const noEmployeeFound = !results.rows.length;
        if (noEmployeeFound) {
            res.send("Employee not found in database...")
        }
        //get employee by id and delete
        pool.query(queries.deleteEmployee, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Employee remove successfully')
        })
    })

}

//edit/update employee

const updateEmployee = (req, res) => {
    //get id from url
    const id = parseInt(req.params.id);
    //get name of the body that we want to update
    const { firstname, lastname, dept, title, email, salary, birthdate, joindate } = req.body;

    pool.query(queries.getEmployeesById, [id], (error, results) => {
        //if employee not found return
        const noEmployeeFound = !results.rows.length;
        if (noEmployeeFound) {
            res.send("Employee not found in database...")
        }
        //get employee by name to update
        pool.query(queries.updateEmployee, [firstname, lastname, dept, title, email, salary, birthdate, joindate, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Employee updated successfully")
        })
    })

}


//export object to reuse in routes
module.exports = {
    getEmployees,
    getEmployeesById,
    addEmployee,
    deleteEmployee,
    updateEmployee

}