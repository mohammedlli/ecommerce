
import { faPlus, faUsers ,faBasketShopping} from "@fortawesome/free-solid-svg-icons";
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
        name:"Add Users",
        path:"/dashbord/prutacts",
        icon:faBasketShopping,
        role:["1995","1999"]
    },
    {
        name:"Writer",
        path:"/dashbord/writer",
        icon:faPlus,
        role:["1995","1996"]

    }
]