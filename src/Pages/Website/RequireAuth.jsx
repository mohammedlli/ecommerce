import {Axios} from "../../Api/Axios"
import Cookie from 'cookie-universal';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { USERS} from '../../Api/Api';
import LoadingSubmit from '../../Components/Loading/Loading';
export default function RequireAuth(){
    const [user , setUser] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get(`/${USERS}`)
        .then((data)=>setUser(data)).catch(()=>navigate("/login",{replace:true}))
    },[])
    const cookie = Cookie();
    const token = cookie.get("e-commerc")
    //<Outlet/> : <Navigate to={'/login'} replace={true}/> 
    return token ? 
    (user === "" ?
    <LoadingSubmit/>:<Outlet/>):
    <Navigate to={"/login"} replace={true}/>;
}