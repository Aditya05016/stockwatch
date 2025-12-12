import {useState} from "react";




function Register() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    // const[error,setError] = useState("");
    // const[data,setData] = useState([]);

  
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6 ">Register</h2>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"/>


         <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"/>

        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"/>
        <button className="bg-blue-500 p-2 mt-1 font-semibold text-white text-center">Register</button>
        </div>
        </div>
    )
}

export default Register;