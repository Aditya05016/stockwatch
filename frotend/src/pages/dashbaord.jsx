import { useState } from "react";
import { getStocks } from "../services/axios";

function Dashboard() {
  const [stock, setStock] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!stock.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await getStocks(stock);
      setData(response.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while searching stocks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-200 min-h-screen">
      <div className="bg-white shadow-lg p-8 w-full max-w-sm rounded-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Stock Search
        </h2>

        <input
          type="text"
          placeholder="Search your stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {error}
          </p>
        )}

        {/* Results */}
        <ul className="mt-4">
          {data.map((item) => (
            <li
              key={item.symbol}
              className="border-b py-2 last:border-none"
            >
              <p className="font-semibold">{item.symbol}</p>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Empty state */}
        {!loading && data.length === 0 && stock && !error && (
          <p className="text-center text-sm text-gray-500 mt-4">
            No results found
          </p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
