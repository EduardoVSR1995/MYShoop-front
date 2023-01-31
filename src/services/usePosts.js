import { conect } from "./api";

export async function postCart(id, quantiti, token) {
  const response = await conect("/product/cart", 
    { method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id, quantiti: quantiti }) });
  return response;
}
