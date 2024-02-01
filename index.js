import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("hello Node.js World!");
});

app.listen(port, () => {
    console.log(`🚀 Fire app listening on port ${port}!`);
});

app.get("/", function (request, response) { 
    response.send("Hello World!"); //response.status[200].send("Hello World!") can send HTTP response code aswell as data
});

app.post("/", function (req, res) { 
    res.send("Request using POST");
});

app.put("/", function (req, res) { 
    res.send("Request using PUT");
});

app.delete("/", function (req, res) { 
    res.send("Request using DELETE");
});

app.all("/", function (req, res) { 
    res.send("Request using GET, POST, PUT or DELETE");
});