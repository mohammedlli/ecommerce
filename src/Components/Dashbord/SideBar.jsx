import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
export default function SideBar(){
    const menu = useContext(Menu);
    const isOpen = menu.isOpen;
    console.log(isOpen);
    return <>
    <div className="side pt-3" style={{width:isOpen? "240px": "60px"}}>
        <NavLink to={'users'} 
        style={{padding: isOpen? "10px 8px 10px 15px" :"10px 10px"}}
        className='side-bar-link d-flex align-items-center gap-2'>
            <FontAwesomeIcon icon={faUsers}/>
            <p className="m-0" style={{display: isOpen? "block" : "none"}}>Users</p>
        </NavLink>
        </div>
    </>
}