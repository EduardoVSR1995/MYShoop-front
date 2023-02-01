import { conect } from "./api";

export async function getProducts() {
  const response = await conect("/product", { method: "GET" });
  return response;
}

export async function getSearchProducts(product) {
  const response = await conect(`/product/search/${product}`, { method: "GET" });
  return response;
}
