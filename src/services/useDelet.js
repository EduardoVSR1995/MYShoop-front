import { conect } from "./api";

export async function removCart(id, token) {
  const response = await conect(`/product/remov/${id}`, 
    { 
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
  
  return response;
}
