import axios from "axios";


export const getUsers =() =>{
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:4000/users")
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
}

export const getUser = async (id) => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
};

export const createUser = async (data) => {
  console.log("Here is the data ", data);
  await axios.post(`http://localhost:4000/Users`, data);
};

export const updateUser = async (id, data) => {
  await axios.patch(`http://localhost:4000/users/${id}`, data);
};

export const deleteUser = async (id, data) => {
  await axios.delete(`http://localhost:4000/users/${id}`, data);
};

export const checkUser = async (email, password) => {
  console.log(email, password)
  const response = await axios.get(`http://localhost:4000/Users/?email=${email}&password=${password}`);
  if(response.data.length === 0){
    console.log(email , password)
    console.log("Error null")
    return null;
  }
  return response.data[0];
};