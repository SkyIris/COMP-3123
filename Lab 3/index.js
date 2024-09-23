 var http = require("http");
//TODO - Use Employee Module here
var empData = require("./Employee.js");
let employees = empData.employees;

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    }
    else {
        //http://localhost:8081/
        if (req.url === '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            res.end()
        }
        //http://localhost:8081/employee
        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(employees));
            //for (const [key, value] of Object.entries(employees)) { console.log(value); }
        }
        //http://localhost:8081/employee/names
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = [];
            for (const [key, value] of Object.entries(employees)) { employeeNames.push(value.firstName + " " + value.lastName); }
            employeeNames.sort();
            return res.end(JSON.stringify(employeeNames));
        }
        //http://localhost:8081/employee/totalsalary
        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            var total = 0;
            for (const [key, value] of Object.entries(employees)) { total += value.Salary; }
            let totalSalary = [{ total_salary: total }];
            return res.end(JSON.stringify(totalSalary));
            //return res.end(JSON.stringify(employees, "Salary"));
    }
    //res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);

})
