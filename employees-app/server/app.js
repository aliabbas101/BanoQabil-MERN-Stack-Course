import bodyParser from "body-parser";
import { express } from "express";
import employeeRouter from "./employee";

const app = express();

/** Middlewares */
app.use(bodyParser.json());
app.use(employeeRouter);

app.get('/',(req, res)=>{
    res.json({message: 'Success'});
    res.end();
});


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Started listening on PORT: ", PORT);
});