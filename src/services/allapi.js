import { baseUrl } from "./baseUrl"
import { commonApi } from "./commonRequest"

export const registerApi=async(body)=>{
    return await commonApi('POST',`${baseUrl}/user/register`,body,"")
   }

   export const loginApi=async(body)=>{
    return await commonApi('POST',`${baseUrl}/user/login`,body,"")
 }  

 export const postApi=async(body)=>{
    return await commonApi('POST',`${baseUrl}/books/post`,body,"")
 }

 export const getbookApi=async()=>{
    return await commonApi('GET',`${baseUrl}/books/getbooks`,"","")
 }