import {Axios} from "../../Api/Axios"
import Cookie from 'cookie-universal';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { USER} from '../../Api/Api';
import LoadingSubmit from '../../Components/Loading/Loading';
import Err403 from "./403";
export default function RequireAuth({allowedRole}){
    const [user , setUser] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get(`/${USER}`)
        .then((data)=>setUser(data.data))
        .catch(()=>navigate("/login",{replace:true}))
    },[])
    const cookie = Cookie();
    const token = cookie.get("e-commerc")
    return token ? (
        user === "" ?(
        <LoadingSubmit/>
        ): allowedRole.includes(user.role) ? (
        <Outlet/>
        ):(
        <Err403/>
        )
        ):(
        <Navigate to={"/login"} replace={true}/>
        );
}