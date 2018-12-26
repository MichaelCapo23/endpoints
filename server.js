const express = require('express'); //load in content from express file into variable
const server = express(); //run the express files and save it into server variable.

const staticModule = express.static(__dirname + '/document-root'); // making server.use look for this file path and runs the file if it is in the same file-path specified //same shit yo do in mampm to find the files to run but it finds it for u through this command
server.use(staticModule);  //use is a server method    //distributes index.html out

const triggerPath = '/quote';
server.get(triggerPath, (request, response) => { //server when you get a request, call this function. //income request data, and the response data.
    response.send('response back');
});

const port = 7000;
server.listen( port, () =>  { // server.listen takes in a port number to listen at and a callback function when it starts listening //listen is waiting for an future requests. basically just wait for something to come in.
    console.log("server is listening on port 7000");
});




