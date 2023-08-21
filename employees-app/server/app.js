import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';

import adminRouter from './routes/admin.routes.js';
import mainRouter from './routes/main.routes.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import multer from 'multer';

var upload = multer();

const app = express();

config();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/admin', adminRouter);
app.use('/main', mainRouter);

app.listen(process.env.PORT,()=>{
    console.log("server started listening on PORT: ",process.env.PORT)
})