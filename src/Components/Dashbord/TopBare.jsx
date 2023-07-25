import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
export default function TopBar(){
    const menu = useContext(Menu);
    const setIsOpen = menu.setIsOpen;
    return <>
    <div className="top d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-4">
        <h3>Ecommerce</h3>
        <FontAwesomeIcon
        onClick={()=> setIsOpen((prev)=> !prev)}
        cursor={"Pointer"} icon={faBars} />
        </div>
    </div>
    </>
}