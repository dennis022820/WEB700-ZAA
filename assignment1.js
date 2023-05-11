/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Dennis Castro Student ID: 122875222 Date: May 19, 2023
*
********************************************************************************/ 

console.log("**************************************** \n");

//Step 2 - Hello World
console.log("Hello World!");

console.log("**************************************** \n");

//Step 3 - Creating the "Server Paths" 
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Dennis Castro","Dennis Castro, dcastro15@myseneca.ca",
  "User Logged In","Main Panel","Logout Complete"];

//Step 4 - Creating the "web server simulator" Function - "httpRequest" 

function httpRequest(httpVerb, path) {

    for (var z = 0; z < serverVerbs.length; z++) {
        if (serverVerbs[z] == httpVerb && serverPaths[z] == path) {
          return "200: " + serverResponses[z];
        } else {
          continue
        }
      }
      return "404: Unable to process " + httpVerb + " request for " + path;

}

//Step 5 - Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT","/"));
console.log("\n");
console.log("**************************************** \n");

//Step 6 - Automating the Tests by creating a "automateTests" Function

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }

  function automateTests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
    function randomRequest() {
      var randVerb = testVerbs[getRandomInt(2)];
      var randPath = testPaths[getRandomInt(7)];
      console.log(httpRequest(randVerb, randPath));
    }
  
    setInterval(randomRequest, 1000);
  }

  automateTests()

  console.log("**************************************** \n");

  