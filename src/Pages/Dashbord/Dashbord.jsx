import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashbord/SideBar";
import TopBar from "../../Components/Dashbord/TopBare";

export default function Dashbord(){
    return(
        <div className="position-relative dashbord">
            <TopBar/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}