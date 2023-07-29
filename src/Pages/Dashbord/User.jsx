import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Axios } from "../../Api/Axios";
import { USER, baseURL } from "../../Api/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSubmit from "../../Components/Loading/Loading";

export default function User(){
    const [name , setrName] = useState('');
    const [email , setEmail] = useState('');
    const [role , setRole] = useState("");
    const [disable , setDisable] = useState(true);
    const [lodaing , setLodaing] = useState(false);
    const navigate = useNavigate();
    const id = Number(window.location.pathname.replace("/dashbord/users/",""));
    useEffect(()=>{
        setLodaing(true);
        Axios.get(`${USER}/${id}`)
        .then((data)=>{
            setrName(data.data.name)
            setEmail(data.data.email)
            setRole(data.data.role)
        })
        .then(()=>setDisable(false))
        .catch(()=>navigate('/dashbord/users/page/404'))
        setLodaing(false);
    },[])
    async function handleSubmit(e){
        e.preventDefault();
        setLodaing(true);
        try{
            const res = await Axios.post(`${USER}/edit/${id}`,{
                name:name,
                email:email,
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
        controlId="exampleForm.ControlInput1">
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
        controlId="exampleForm.ControlInput1">
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
        <Button disabled={disable}
        className="btn btn-primary" 
        variant="primary" 
        type="submit">
        Save
        </Button>
        </Form>
        </>
    )
}