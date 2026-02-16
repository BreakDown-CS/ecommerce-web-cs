import axios from "axios";
import config from "./config"; 

export const warehouseAxios = axios.create({
  baseURL: config.apiEcommerce, // ตรวจสอบว่าใช้ตัวแปรนี้แน่ๆ
  headers: {
    "Content-Type": "application/json",
  },
});