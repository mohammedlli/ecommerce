import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashbord/SideBar";
import TopBar from "../../Components/Dashbord/TopBare";

export default function Dashbord(){
    return(
        <div className="position-relative ">
            <TopBar/>
            <div className="dashbord d-flex gap-1" style={{marginTop:"70px"}}>
            <SideBar/>
            <Outlet/>
            </div>
        </div>
    )
}