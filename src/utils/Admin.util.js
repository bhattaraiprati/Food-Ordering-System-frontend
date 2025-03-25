import axios from "axios";

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