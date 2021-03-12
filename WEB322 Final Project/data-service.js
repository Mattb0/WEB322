// global vars
const fs = require('fs');
var employees = [];
var departments = [];

module.exports.initialize = function ()
{
    const filename = 'data/employees.json';
    const filename2 = 'data/departments.json';

    return new Promise(function(resolve, reject)
    {
        fs.readFile(filename, function(err, dat)
        {
            resolve(); 
            employees = JSON.parse(dat)
            reject("error. json file cannot be read");
        });

        fs.readFile(filename2, function(err, dat)
        {
            resolve(); 
            departments = JSON.parse(dat)
            reject("error. json file cannot be read");
        });
    });
};

module.exports.GetAllEmployees = function()
{
   if (employees.length <= 0)
    {
       return "No results returned.";   
    }
    else
    {
    return employees;
    }
};

module.exports.getDepartments = function()
{
    if (departments.length <= 0)
    {
        return "No results returned."
    }
    else
    {
        return departments;
    }
};

module.exports.getManagers = function()
{
    var managers = [];
    if (employees.length <= 0)
    {
        return "No results returned.";   
    }
    else
    {
        for (var i = 0; i < employees.length; i++)
        {
           if ( employees[i]["isManager"] === true )
            {
                managers += employees[i];
            }
        }

    return managers;
    }
};
