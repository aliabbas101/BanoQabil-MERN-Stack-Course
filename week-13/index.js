import http from 'http';
import fs from 'fs';




let port = "8080";
let server = http.createServer((req,res)=>{
    
    console.log("REQUEST BODY FROM CLIENT=>", req.url, req.method);

    fs.readFile('index.html', (error, data)=>{
        if(error) {
            console.log(error);
        }
    
        res.write(data.toString());
        res.end();
        // Hello
    })

    
});

server.listen(port);