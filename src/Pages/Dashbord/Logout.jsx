import { LOGOUT} from "../../Api/Api"
import { Axios } from "../../Api/Axios";
export default function Logout(){
    async function handlelogout(){
        try{
            const res = await Axios.get(`/${LOGOUT}`)
            console.log(res);
            }
            catch(err){
                console.log(err);
            }
    }
    return<>
    <span onClick={handlelogout}>Logout</span>
    </>
}