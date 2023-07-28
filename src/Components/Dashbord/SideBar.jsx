import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";
import { Axios } from "../../Api/Axios";
import { USER } from "../../Api/Api";
import { links } from "./NavLink";
export default function SideBar(){
    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    console.log(size);
    const menu = useContext(Menu);
    const isOpen = menu.isOpen;
    console.log(isOpen);
    const [user , setUser] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get(`/${USER}`)
        .then((data)=>setUser(data.data))
        .catch(()=>navigate("/login",{replace:true}))
    },[])
    return <>
    <div style={{
        position:"fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"100vh",
        backgroundColor:"rgba(0,0,0,0.2)",
        display:size <768 && isOpen? "block" :"none",

    }}></div>
    <div className="side pt-3" 
    style={{
        left:size <  '786' ? (isOpen? 0: "-100%"):0, 
        width:isOpen? "250px": "60px",
        position:size <'768'? "fixed" : "sticky"}}>

        {links.map((link)=>
        link.role.includes(user.role)&&(
        <NavLink to={link.path} 
        style={{padding: isOpen? "10px 8px 10px 15px" :"10px 10px"}}
        className='side-bar-link d-flex align-items-center gap-2'>
            <FontAwesomeIcon icon={link.icon}/>
            <p className="m-0" style={{display: isOpen? "block" : "none"}}>{link.name}</p>
        </NavLink>))}
        </div>
    </>
}