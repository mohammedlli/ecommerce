import Cooike from 'cookie-universal'
import { Outlet } from 'react-router-dom';
export default function RequireBack(){
    const cookie = Cooike();
    const token = cookie.get("e-commerc")
    return token? window.history.back() : <Outlet/>;
}