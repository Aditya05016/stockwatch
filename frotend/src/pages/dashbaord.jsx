import { useState } from "react";
import { getStocks } from "../services/axios";

function Dashboard() {

    const [stock, setStock] = useState("");   // start with empty string
    const [data, setData] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await getStocks(stock); // use stock, not query
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Something went wrong", error);
        }
    };

    return (
        <div className="flex items-center justify-center bg-slate-200 h-screen">
            <div className="bg-white shadow-lg p-8 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Search your stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="p-2 m-2 rounded-md"
                />

                <button
                    onClick={handleSubmit}
                    className="bg-blue-400 text-white mt-1 p-2"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
