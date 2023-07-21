import axios from "axios"
import { LOGOUT, baseURL } from "../../Api/Api"
import Cookie from 'cookie-universal';
export default function Logout(){
    const cookie = Cookie();
    async function handlelogout(){
        try{
            const res = await axios.get(`${baseURL}/${LOGOUT}`,{
            headers:{
                Authorization: 'Bearer ' + cookie.get('e-commerc')
            }})
            console.log(res);
            }
            catch(err){
                console.log(err);
            }
    }
    return<>
    <button onClick={handlelogout}></button>

    </>
}