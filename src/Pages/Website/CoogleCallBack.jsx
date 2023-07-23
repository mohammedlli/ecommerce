import axios from "axios"
import { useEffect } from "react"
import { GOOGLE_CALL_BACK, baseURL } from "../../Api/Api"
import { useLocation } from "react-router-dom"

export default function GoogleCallBack(){
const location = useLocation();
    useEffect(()=>{
        async function GoogleBack(){
            try{
                const res = await axios.get(`${baseURL}/${GOOGLE_CALL_BACK}${location.search}`)
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }
        GoogleBack();
    },[])
    return<>
    <h1>test</h1>
    </>
}