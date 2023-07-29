import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { USER, baseURL } from "../../Api/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSubmit from "../../Components/Loading/Loading";

export default function AddUser(){
    const [name , setrName] = useState('');
    const [email , setEmail] = useState('');
    const [role , setRole] = useState("");
    const [password , setPassword] = useState("");
    const [lodaing , setLodaing] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLodaing(true);
        try{
            const res = await Axios.post(`${USER}/add`,{
                name:name,
                email:email,
                password:password,
                role:role,
            })
            navigate("/dashbord/users")
            setLodaing(false);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
        {lodaing&& <LoadingSubmit/>}
        <Form className="bg-white w-100 p-3" onSubmit={handleSubmit}>
        <Form.Group 
        controlId="exampleForm.ControlInput1">
        <Form.Control 
        name="name"
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setrName(e.target.value)}
        required
        />
        <Form.Label>Name</Form.Label>
        </Form.Group>

        <Form.Group 
        controlId="exampleForm.ControlInput2">
        <Form.Control 
        name="email"
        type="email" 
        placeholder="name@example.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <Form.Label>Email address</Form.Label>
        </Form.Group>

        <Form.Group 
        controlId="exampleForm.ControlInput3">
        <Form.Control 
        name="password"
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />
        <Form.Label>Email address</Form.Label>
        </Form.Group>
        <Form.Group 
        controlId="exampleForm.ControlInput4">
        <Form.Select 
        value={role} onChange={(e)=>setRole(e.target.value)}
        >
        <option disabled value="">Select Role</option>
        <option value="1995">Admin</option>
        <option value="2001">User</option>
        <option value="1996">Wtiter</option>
        <option value="1999">Proutact</option>
        </Form.Select>
        <Form.Label>Name</Form.Label>
        </Form.Group>
        <Button
        disabled={name.length > 1 && email.length >1 && password.length >6 && role!=="" ? false :true}
        className="btn btn-primary" 
        variant="primary" 
        type="submit">
        Save
        </Button>
        </Form>
        </>
    )
}