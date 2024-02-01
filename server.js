import http from "http";


//develop front end on 3000, backend on 8000/8080, and database 5432
const port = 3000;


//request handler receives request and response object that represents 
//the http request and response
const requestHandler = (request, response) => {
    response.end("Hello Node.js Server!");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("error");
    }
    console.log(`server is listening on ${port}`);
});