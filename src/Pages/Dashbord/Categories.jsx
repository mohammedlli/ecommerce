import { useEffect, useState } from "react"
import { USER, USERS } from "../../Api/Api"
import { Table } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTShirt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
import TableShow from "./Table";
export default function Categories(){
    const [users , setUsers] = useState([]);
    const [deleteUser , setDeleteUser] = useState(false);
    const [currentUser , setCurrentUser] = useState('');
    const [noUsers , setNoUsers] = useState(false);
    useEffect(()=>{
        Axios.get(`${USER}`).then((data)=>setCurrentUser(data.data))
    },[])
    useEffect(()=>{
        Axios.get(`/${USERS}`)
        .then((data)=>setUsers(data.data))
        .then(()=>setNoUsers(true))
    },[deleteUser])
    


    // const userShow = users.map((user,key)=>(
    //     <tr key={key}>
    //         <td>{key+1}</td>
    //         <td>{user.name === currentUser.name ? user.name +" (you)":user.name}</td>
    //         <td>{user.email}</td>
    //         <td>{user.role === '1995' ?'admin' :user.role==='2001' ? 'user':user.role==='1996'?'writer':"Proutact"}</td>
    //         <td>
    //         <div className="d-flex align-items-center gap-2">
    //         <Link to={`${user.id}`}>
    //         <FontAwesomeIcon 
    //         fontSize={"19px"} 
    //         icon={faPenToSquare} />
    //         </Link>
    //         {
    //             user.id === currentUser.id ?"":
    //         <FontAwesomeIcon 
    //         fontSize={"19px"} 
    //         icon={faTrash}
    //         cursor={"pointer"}
    //         color="red"
    //         onClick={()=>hanleDelete(user.id)}/>}
    //         </div>
    //         </td>
    //     </tr>
    // ))

    //handleDelete
    async function hanleDelete(id){
        try{
            const res = await Axios.delete(`${USER}/${id}`)
        setDeleteUser((prev) => !prev);
        }
        catch(err){
        }
    }
    const headers = [
        {
            name:"id"
        },
        {
            name :"Title"
        },
        {   
            name:"Image"
        },
    ]
    return <div className="bg-white w-100 p-2">
        <div className="d-flex align-items-center justify-content-between">
        <h1>User Page</h1>
        <Link to="/dashbord/user/add" className="btn btn-primary">Add User</Link>
        </div>
        <TableShow headers={headers} data={users}/>
    </div>
}