import{useState} from "react";


function Dashboard() {

    const[stock,setStock] = useState([]);
    return (
        <div className="flex items-center justify-center bg-slate-200 h-screen">

            <lable className = "text-xl font-semibold">Search for your stock</lable>
            <input type="text"
            placeholder="Search your stock"
            value={stock}
            onChange = {(e) => setStock(e.target.value)} />

            <button className="bg-blue-400 text-white mt-1 p-2">Search</button>


        </div>
    )
}

export default Dashboard;