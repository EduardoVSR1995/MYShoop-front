import { conect } from "./api";

export async function getProducts() {
  const response = await conect("/product", { method: "GET" });
  return response;
}
