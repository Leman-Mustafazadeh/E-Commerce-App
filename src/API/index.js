import axios from "axios";
import { BASE_URL } from "./base";

//get all
export async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response;
  } catch (error) {
    return error;
  }
}

//get one
export async function getOne(endpoint,id) {
  try {
    const response = await axios.get(BASE_URL + endpoint + `/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

//post
export async function post(endpoint, payload) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload);
    return response;
  } catch (error) {
    return error;
  }
}

//delete
export async function deleteOne(endpoint, id) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

//put
export async function put(endpoint, id, payload) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

//patch
export async function patch(endpoint, id, payload) {
  
  try {
    const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}
