import { useEffect, useState } from "react"
import { USERS } from "../../Api/Api"
import Logout from "./Logout";
import { Table } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
export default function Users(){
    const [users , setUsers] = useState([]);
    useEffect(()=>{
        Axios.get(`/${USERS}`)
        .then((data)=>setUsers(data.data))
        .catch((err)=>console.log(err))
    },[])

    const userShow = users.map((user,key)=>(
        <tr key={key}>
            <td>{key+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    ))
    return <div className="bg-white w-100 p-2">
        <h1>User Page</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {userShow}
        </tbody>
        </Table>
    </div>
}