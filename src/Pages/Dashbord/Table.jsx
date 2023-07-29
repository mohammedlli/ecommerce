import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Axios } from "../../Api/Axios";

export default function TableShow(props){
    const current = props.currentUser || false;
           //handleDelete


    const showHead = props.headers.map((head)=>(
            <th>{head.name}</th>
    )) 
    const showData = props.data.map((user,index)=>(
        <tr key={index}>
            <td>{index+1}</td>
            {props.headers.map((user2,index)=>(
                <td>{user[user2.key] ==='1995' ?'admin' :
                user[user2.key] ==='2001' ? 'user':
                user[user2.key] ==='1996'?'writer'
                :user[user2.key] ==="1999"?"Proutact":
                user[user2.key]}
                {current && user[user2.key]===current.name&& " (You)"}
                </td>

            ))}
            <td>
            <div className="d-flex align-items-center gap-2">
            <Link to={`${user.id}`}>
            <FontAwesomeIcon 
            fontSize={"19px"} 
            icon={faPenToSquare} />
            </Link>
            {
            user.id === current.id ?"":
            (<FontAwesomeIcon 
            fontSize={"19px"} 
            icon={faTrash}
            cursor={"pointer"}
            color="red"
            onClick={()=>props.delete(user.id)}/>)}
            </div>
            </td>
        </tr>
    ))
    return<>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
                {showHead}
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.data.length === 0 && 
            <tr>
                <td colSpan={12}>Loding...</td>
            </tr>}
            {showData}
        </tbody>
        </Table>
    </>
}