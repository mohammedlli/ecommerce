import axios from "axios";
import { useState } from "react"
import { LOGIN, baseURL } from "../../Api/Api";
import LoadingSubmit from "../../Components/Loading/Loading";
import Cookie from 'cookie-universal';
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
        <form className="from" onSubmit={handleSubmit}>
            <div className="custem-form">
                <h1>Login Now</h1>
        <div className="form-control">
            <input 
            id="email" 
            name="email" 
            type="text"
            placeholder="entar your email..."
            value={form.email}
            onChange={handelChange}
            required/>
            <label>Email</label>

        </div>
        <div className="form-control">
            <input 
            id="password" 
            name="password" 
            type="password"
            placeholder="entar your password..."
            value={form.password}
            onChange={handelChange}
            minLength={6}
            required/>
            <label>Password</label>
            
        </div>
        <button className="btn btn-primary">Login</button>
        {err !== "" &&  <span className="error">{err}</span>}
        </div>
        <div>
            <a href={`http://127.0.0.1:8000/login-google`} >
                sign in with google
            </a>
        </div>
        </form>
        </div>
    </div>
    </>
}