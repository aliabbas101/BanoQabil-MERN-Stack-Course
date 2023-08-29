import axios from "axios";


let apiUrl = "http://localhost:8080/main/";
let adminUrl = "http://localhost:8080/admin/";
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