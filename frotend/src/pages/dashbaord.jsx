import{useState} from "react";


function Dashboard() {

    const[stock,setStock] = useState();
    return (
        <div className="flex items-center justify-center bg-slate-200 h-screen">

           <div className="bg-white shadow-lg p-8 w-full max-w-sm">
            <input type="text"
            placeholder="Search your stock"
            value={stock}
            onChange = {(e) => setStock(e.target.value)}
            className="p-2 m-2 rounded-md" />

            <button className="bg-blue-400 text-white mt-1 p-2">Search</button>
            </div>


        </div>
    )
}

export default Dashboard;