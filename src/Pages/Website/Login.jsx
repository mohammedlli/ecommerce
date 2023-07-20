import axios from "axios";
import { useState } from "react"
import { LOGIN, baseURL } from "../../Api/Api";

export default function Login(){
    //state
    const [form,setForm] = useState({
        email:"",
        password:"",
    });

    function handelChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log("re");
        try{
            await axios.post(`${baseURL}/${LOGIN}`,form);
            console.log("secces");
        }
        catch(err){
            console.log(err);
        }
    }

    return<>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div>
                <label>email</label>
                <input 
                id="email" 
                name="email" 
                type="text"
                placeholder="entar your email..."
                value={form.email}
                onChange={handelChange}/>
                
            </div>
            <div>
                <label>password</label>
                <input 
                id="password" 
                name="password" 
                type="password"
                placeholder="entar your password..."
                value={form.password}
                onChange={handelChange}/>
                
            </div>
            <button>submit</button>
            </form>
            
        </div>
        </>
}