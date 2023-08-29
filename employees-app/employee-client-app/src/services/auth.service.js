import axios from "axios";


const apiUrl = "http://localhost:8080/main/";

export const login = async(formData)=>{
    try{
        let response = await axios.post(apiUrl + "login",formData);
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};


export const register= async(formData)=>{

    try {
        let response= await axios.post(apiUrl +"register", formData)
        return response.data;
    }
    catch(err) {
        console.error(err);
    }
};