//initialise express
const express = require('express');
const employeeRoutes = require('./src/employees/routes/routes')
const app = express()
const port = 3000; // port number


//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world")
})
//use employee routes path
app.use('/api/employee', employeeRoutes)


app.listen(port, () => console.log(`App listening on port ${port}`))

