import axios from "axios";
import { useState } from "react"
import { LOGIN, baseURL } from "../../Api/Api";
import LoadingSubmit from "../../Components/Loading/Loading";
import Cookie from 'cookie-universal';
import { Form } from "react-bootstrap";
export default function Login(){
    //state
    const [form,setForm] = useState({
        email:"",
        password:"",
    });
    const [loading,setLoading] = useState(false);

    const cookie = Cookie();
    const [err,setErr] = useState("");
    function handelChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log("re");
        setLoading(true);
        try{
            const res = await axios.post(`${baseURL}/${LOGIN}`,{
                email:form.email,
                password:form.password
            });
            const token =res.data.token 
            cookie.set('e-commerc',token);
            console.log(res.data.token);
            setLoading(false);
            window.location.pathname="/users"
        }
        catch(err){
            console.log(err);
            console.log(err);
            if(err.response.status=== 401){
                setErr("Email is alredy been taken");
            }else{
                setErr("Internal Server ERR");
            }
            setLoading(false);
        }
    }

    return <>
    {loading && < LoadingSubmit/>}
    <div className="container" >
        <div className="row h-100">
        <Form className="from" onSubmit={handleSubmit}>
            <div className="custem-form">
                <h1>Login Now</h1>
        <Form.Group 
        
        className="form-custom" 
        controlId="exampleForm.ControlInput1">
        <Form.Control 
        name="email"
        type="email" 
        placeholder="name@example.com"
        value={form.email}
        onChange={handelChange}
        required
        />
        <Form.Label>Email address</Form.Label>
        </Form.Group>

        <Form.Group 
        className="form-custom" 
        controlId="exampleForm.ControlInput2">
        <Form.Control 
        name="password"
        type="password" 
        placeholder="passwoard"
        value={form.password}
        onChange={handelChange}
        minLength={6}
        required
        />
        <Form.Label>password</Form.Label>
        </Form.Group>
        <button className="btn btn-primary">Login</button>
        {err !== "" &&  <span className="error">{err}</span>}
        </div>
        <div>
            <a href={`http://127.0.0.1:8000/login-google`} >
                sign in with google
            </a>
        </div>
        </Form>
        </div>
    </div>
    </>
}