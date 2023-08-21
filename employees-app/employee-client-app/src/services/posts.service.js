import axios from "axios";


let apiUrl = "https://mern-stack-express-server.vercel.app/main/";
let adminUrl = "https://mern-stack-express-server.vercel.app/admin/";
export const getPosts = async()=>{

    try{
        let response = await axios.get(apiUrl+"posts");
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};


export const addPost = async(formData)=>{
    try {
        let response =await axios.post(adminUrl+ "createpost", formData, {
            headers:{
                "token" : localStorage.getItem("token")
            }
        });

        return response.data;
    }
    catch(err){
        console.error(err);
    }
};