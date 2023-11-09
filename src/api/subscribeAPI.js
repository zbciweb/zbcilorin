import axios from "axios";

const url = "http://localhost:5000/subscribe"; 
export const createSubscription = (newSubscription)=> axios.post(url, newSubscription)