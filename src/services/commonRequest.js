import axios from "axios";

export const commonApi=async(method,url,reqbody,reqheader)=>{

    const config={
        method,
        url,
        data:reqbody,
        headers:reqheader?reqheader:{"Content-Type":"application/json"}
    }
   return await axios(config).then((result)=>{
    return result
   }).catch(result=>{
    return result 
   })
} 
