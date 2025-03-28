import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Context/User.context";
import { AwardIcon } from "lucide-react";

export const addCategories = async (item) => {
  console.log("Here is the data ", item);
  await axios.post(`http://localhost:4000/categories`, item);
};

export const viewCategories = async () =>{
    const response =  await axios.get(`http://localhost:4000/categories`);
    return response.data;
}

export const editCategory = async (id, data) =>{
    await axios.patch(`http://localhost:4000/categories/${id}`, data);
}
export const deleteCategory = async (id) =>{
    await axios.delete(`http://localhost:4000/categories/${id}`);
}

export const getCategoryByName = async () =>{
    const response = await axios.get(`http://localhost:4000/categories`);
    return response.data.map((category) => category.name);
}
export const getCategoryById = async ( restaurantId) => {
  const response = await axios.get(`http://localhost:4000/categories`);
  return response.data.filter(
    (user) =>
      (user.restaurantId === restaurantId)
  );
};

export const restaurantRegister = async (data) =>{
    await axios.post(`http://localhost:4000/Users`, data);
}

export const getRestaurantDetails = async ()=>{
    const response = await axios.get(`http://localhost:4000/Users`)
     const restaurants = response.data.filter(
       (user) => user.role === "restaurant"
     );

     return restaurants;
}

export const getAllestaurantDetails = async ()=>{
  const response = await axios.get(`http://localhost:4000/KycForm`);
  return response.data;
}

export const getRestaurantByStatus = async () => {
  const response = await axios.get(`http://localhost:4000/Users`);
  const restaurants = response.data.filter(
    (user) => user.status === "pending" & user.role === "restaurant"
  );

  return restaurants;
};

export const updateRestaurant = async (id, data) =>{
    await axios.patch(`http://localhost:4000/Users/${id}`, data);

}

export const KycFormPost = async (data) =>{
    await axios.post(`http://localhost:4000/KycForm`, data);
}


export const getKycDetails = async (restaurantId) => {
  try {
    const response = await axios.get(`http://localhost:4000/KycForm`);
    return response.data.filter((user) => user.restaurantId === restaurantId);
  } catch (error) {
    console.error("Error fetching KYC details:", error);
    return null;
  }
};

export const addMenuItem = async (data) =>{
    await axios.post(`http://localhost:4000/MenuItem`, data);
}
export const getMenuItemById = async (restaurantId, category) => {
  try {
    const response = await axios.get(`http://localhost:4000/MenuItem`);
    return response.data.filter(
      (user) =>
        user.restaurantId === restaurantId & user.category === category
    );
  } catch (error) {
    console.error("Error fetching KYC details:", error);
    return null;
  }
};
export const GetMenuItem = async (id) =>{
    const response = await axios.get(`http://localhost:4000/MenuItem/${id}`);
    return response.data;
}

export const UpdateMenu = async (values, id) =>{
    await axios.patch(`http://localhost:4000/MenuItem/${id}` ,values);
}
export const DeleteMenu = async (id) => {
  await axios.delete(`http://localhost:4000/MenuItem/${id}`);
};