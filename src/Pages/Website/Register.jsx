import axios from "axios";
import { useState } from "react"
import { REGISTER, baseURL } from "../../Api/Api";
import LoadingSubmit from "../../Components/Loading/Loading";

export default function Register(){
    //state
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
    });

    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState("");

    function handelChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log("re");
        setLoading(true);
        try{
            await axios.post(`${baseURL}/${REGISTER}`,form);
            console.log("secces");
            window.location.pathname="/"
            setLoading(false)
        }
        catch(err){
            console.log(err);
            if(err.response.status=== 422){
                setErr("Email is alredy been taken");
            }else{
                setErr("Internal Server ERR");
            }
            setLoading(false)
        }
    }

    return(
        <>
        {loading && <LoadingSubmit/>}
        <div className="container" >
            <div className="row h-100">
            <form className="from" onSubmit={handleSubmit}>
                <div className="custem-form">
                    <h1>Register Now</h1>
            <div className="form-control">
                <input 
                id="name" 
                name="name" 
                type="text"
                placeholder="entar your name..."
                value={form.name}
                onChange={handelChange}
                required/>
                <label>Name</label>
            </div>
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
            <button className="btn btn-primary">Register</button>
            {err !== "" &&  <span className="error">{err}</span>}
            </div>
            </form>
            </div>
        </div>
        </>
    );
}