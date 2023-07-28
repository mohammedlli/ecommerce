import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";
export default function SideBar(){
    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    console.log(size);
    const menu = useContext(Menu);
    const isOpen = menu.isOpen;
    console.log(isOpen);
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
        <NavLink to={'users'} 
        style={{padding: isOpen? "10px 8px 10px 15px" :"10px 10px"}}
        className='side-bar-link d-flex align-items-center gap-2'>
            <FontAwesomeIcon icon={faUsers}/>
            <p className="m-0" style={{display: isOpen? "block" : "none"}}>Users</p>
        </NavLink>

        <NavLink to={'/dashbord/user/add'} 
        style={{padding: isOpen? "10px 8px 10px 15px" :"10px 10px"}}
        className='side-bar-link d-flex align-items-center gap-2'>
            <FontAwesomeIcon icon={faPlus}/>
            <p className="m-0" style={{display: isOpen? "block" : "none"}}>Add User</p>
        </NavLink>

        <NavLink to={'/dashbord/writer'} 
        style={{padding: isOpen? "10px 8px 10px 15px" :"10px 10px"}}
        className='side-bar-link d-flex align-items-center gap-2'>
            <FontAwesomeIcon icon={faPlus}/>
            <p className="m-0" style={{display: isOpen? "block" : "none"}}>Writer</p>
        </NavLink>
        </div>
    </>
}