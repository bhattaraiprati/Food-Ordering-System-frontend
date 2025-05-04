import axios from "axios";
import { ILoginResponse } from "../interface/pages/login";


export const RegisterUser = async (data:any) => {
  console.log("Here is the data ", data);
  await axios.post(`http://127.0.0.1:8000/api/userRegister/`, data);
};


export const loginUser = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  const response = await axios.post("http://localhost:8000/api/token/", {
    email,
    password,
  });
  console.log(response);
  
  return response.data;
};