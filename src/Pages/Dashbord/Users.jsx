import axios from "axios"
import { useEffect } from "react"
import { USERS, baseURL } from "../../Api/Api"
import Cookie from 'cookie-universal';
import Logout from "./Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
export default function Users(){
    const cookie = Cookie();
    useEffect(()=>{
        axios.get(`${baseURL}/${USERS}`,{
            headers:{Authorization: 'Bearer '+cookie.get("e-commerc"),
        }})
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))

    },[])
    return <>
    users
    <FontAwesomeIcon icon={faUsers} />
    <Logout/>
    </>
}