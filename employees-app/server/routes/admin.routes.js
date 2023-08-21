import { Router } from "express";
import jwt from 'jsonwebtoken';
import { userModel } from "../models/user.js";
import { postModel } from "../models/post.js";
import multer, { diskStorage } from "multer";
const adminRouter = Router();


const authMiddleware= async (req,res, next) =>{
    console.log("auth middleware ");
    const token = req.headers.token;

    if(!token) {
        res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await userModel.findById({_id:decoded.userId });

        if(!user) {
            res.status(401).json({message: "Unauthorized"});
            res.send();
        }

        next();
    }
    catch(err) {
        res.status(401).json({message: err});
        res.send();
    }
};

adminRouter.use(authMiddleware);

const storage = diskStorage({
    destination: (req, file, cb)=>{
        cb(null, process.env.UPLOAD_PATH)
    },
    filename: (req, file, cb) =>{ 
        
        const filename = file.originalname.toLowerCase().split(' ').join('.')
        cb(null, filename);
    }
});

let upload=  multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            cb(null, true)
        }
        else {
            cb(null, false)
            return cb(new Error("only .jpg,.jpeg and .png extensions allowed"));
        }
    }
})

adminRouter.post('/createpost' ,upload.single('cover') , async (req,res)=>{
    try {
        console.log(req.body);
        const {title, body, userId} = req.body;

        let uploadurl =  req.protocol + "://" +req.get("host") +"/" + process.env.UPLOAD_PATH +"/" + req.file.filename;

        // http://localhost:8080/uploads/abc.jpg

        const newPost = await postModel.create({
            title, 
            body,
            user: userId,
            cover: uploadurl
        });

        res.status(201).json({newPost});
    }
    catch(err) {
        console.log(err);
    }
});






export default adminRouter;