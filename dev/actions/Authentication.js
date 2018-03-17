import axios from 'axios';
export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_UNAUTHENTICATED = 'NOT_UNAUTHENTICATED';
const API = "http://localhost:3000/api/auth/google";


export const googleLoginSuccess = () => {
 
  console.log("inside googleLogin!");


}