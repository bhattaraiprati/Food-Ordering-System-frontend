import axios from "axios";

export const RegisterUser = async (data) => {
  console.log("Here is the data ", data);
  await axios.post(`http://127.0.0.1:8000/api/userRegister/`, data);
};


export const loginUser = async(email, password) =>{
     const response = await axios.post("http://localhost:8000/api/token/", {
       email,
       password,
     });
     if (response.data.length === 0) {
       console.log(email, password);
       console.log("Error null");
       return null;
     }
     return response;
}