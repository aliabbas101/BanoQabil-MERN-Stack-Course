import http from 'http';
import fs from 'fs';

let path = "";



http.createServer((request, response) => {

    console.log("REQUEST=>", request.method, request.url);
    // console.log("RESPONSE=>", response);
    if(request.method == "GET" && request.url == "/"){
        path = "index.html";
    }
    else if(request.method == "GET" && request.url == "/blogs"){
        path = "blogs.html";
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }

        response.write(data.toString());
        response.end();

        // Hello world

    });



    console.log("request recieved");
}).listen(8080);