import axios from "axios";

const url = "http://localhost:5000/cta"; 
export const createCTA = (newCTA)=> axios.post(url, newCTA)