import{useState} from "react";
import { loginRequest } from "../services/axios";



function Login() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[loading,setLoading] = useState("");
    const[error,setError] = useState("");
    const[data,setData] = useState([]);

    const {login} = useAuth();

    const handleLogin = async () =>{
        try{
            setLoading(true);
            if(email.trim() == ""){
                setError("Required filed mandatory")
                return 
            }

            if(password.length <5){
                setError("Pasword lenth is too short")
                return 
            }

            const response = await loginRequest({email,password});
            setData(response.data);
            setLoading(false);
            setEmail("");
            setPassword("");
        }catch(error){
            console.error({message:"Something went wrong"})
        }
    }
    return (
        <div>

            <input type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

             <input type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>


        </div>
    )
}

export default Login;