
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
export const links = [
    {
        name:"Users",
        path:"users",
        icon:faUsers,
        role:"1995"
    },
    {
        name:"Add Users",
        path:"/dashbord/user/add",
        icon:faPlus,
        role:"1995"
    },
    {
        name:"Writer",
        path:"/dashbord/writer",
        icon:faPlus,
        role:["1995","1996"]

    }
]