import express from 'express';

const app = express();

app.get('/', (req,res)=>{

    res.write("Hello world");
    res.end();
});

app.get('/blogs/:userId/:userName', (req, res)=>{
    console.log(req.params.userId, req.params.userName );
    res.write('blogs');
    res.end();
});

app.listen(8080);