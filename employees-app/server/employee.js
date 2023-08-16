import { Router } from "express";

const employeeRouter = Router('/employees');


employeeRouter.get((req, res)=>{
    res.json();
});


export default employeeRouter;