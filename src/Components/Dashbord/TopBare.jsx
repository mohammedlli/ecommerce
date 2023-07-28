import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { LOGOUT, USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import Cookie from 'cookie-universal'
export default function TopBar(){
    const menu = useContext(Menu);
    const setIsOpen = menu.setIsOpen;
    const [name , setName] = useState("");
    const cookie = Cookie();
    const navigate = useNavigate();
    useEffect(()=>{
        Axios.get(`/${USER}`)
        .then((data)=>setName(data.data.name)).catch(()=>navigate("/login",{replace:true}))
    },[])
    async function handlelogout(){
        try{
            const res = await Axios.get(`/${LOGOUT}`)
            navigate("/login",{replace:true})
            cookie.remove("e-commerc")
            }
            catch(err){
                console.log(err);
            }
    }
    return <>
    <div className="top d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-4">
        <h3>Ecommerce</h3>
        <FontAwesomeIcon
        onClick={()=> setIsOpen((prev)=> !prev)}
        cursor={"Pointer"} icon={faBars} />
        </div>
        <DropdownButton id="dropdown-basic-button" title={name}>
        <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
    </DropdownButton>

    </div>
    </>
}