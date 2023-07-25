import { createContext, useState } from "react";

export const WindowSize = createContext(null);

export default function WindowContext({children}){
    const [WindowSize , setWindowSize] = useState(window.innerWidth);
    return (
    <WindowSize.provider value={{WindowSize,setWindowSize}}>
        {children}
    </WindowSize.provider>);
}