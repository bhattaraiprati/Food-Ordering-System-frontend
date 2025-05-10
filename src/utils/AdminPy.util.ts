import axios from "axios";


export const getRestaurantPendingStatus = async () =>{
    const response = await axios.get(
      `http://127.0.0.1:8000/api/restaurants/pending/`
    );
    return response.data;
}

interface IchangedInterface {
  status: string
}

export const UpdateRestauarntStatus = async(id:number, status:IchangedInterface)=>{
  const response = await axios.patch(
    `http://127.0.0.1:8000/api/restaurants/${id}/`,
    status
  );

  return response;
}