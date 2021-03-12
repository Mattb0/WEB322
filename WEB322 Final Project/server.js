var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var data_service = require("./data-service.js")
var app = express();

var htmlDir = "views"


// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendfile(htmlDir + '/home.html');
});

app.get("/home", (req, res) => {
    res.sendfile(htmlDir + '/home.html');
});

app.get("/about", (req, res) => {
    res.sendfile(htmlDir + '/about.html');
});

app.use(express.static('public'));


//------ additional routes ------\\

app.get("/employees", (req, res) => {
    //res.send("employees")
    res.send(data_service.GetAllEmployees());

});

app.get("/managers", (req, res) => {
    res.send(data_service.getManagers());
});

app.get("/departments", (req, res) => {
    res.send(data_service.getDepartments());
});


// 404 page
app.get("*", (req, res) => {
    res.send( "Page Not Found. Status Code: 404");
});


// setup http server to listen on HTTP_PORT
data_service.initialize().then( function() {  // no point in starting the server if initiliaze() fails
    app.listen(HTTP_PORT, function() 
    {
        console.log("listening & initialize() has been run successfully.");
    //}).catch (function(er)
  //  {
  //      console.log("FAILED " + er);
    });
});

console.log("Express http server listening on: " + HTTP_PORT)