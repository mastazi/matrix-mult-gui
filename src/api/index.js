import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/**
 * Multiply the two matrices
 *
 * POST | api/multiply | api.multiply | App\Http\Controllers\MatrixMultiplier@multiply
 */
export const multiply = (payload) => {
  return api.post("api/multiply", payload);
};