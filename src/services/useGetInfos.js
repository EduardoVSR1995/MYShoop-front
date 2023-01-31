import { conect } from "./api";

export async function card(token) {
  const response = await conect("/product/cart", 
    { method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  return response;
}

export async function advertisingGet() {
  const response = await conect("/product/publi", 
    { method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  return response;
}

export async function getAllProduct(id) {
  const response = await conect(`/product/id/${id}`, 
    { method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  return response;
}