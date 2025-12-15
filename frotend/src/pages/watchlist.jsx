import { useEffect, useState } from "react";
import { GetWatchList, RemoveWatchList } from "../services/axios"
import { useAuth } from "../context/AuthContext";

function Watchlist() {
  const { token } = useAuth();

  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        setLoading(true);
        const res = await GetWatchList(token);
        setWatchlist(res.data.watchlist || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load watchlist");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchWatchlist();
    }
  }, [token]);

  const handleRemove = async (stockId) => {
    try {
      await RemoveWatchList({ stockId }, token);
      setWatchlist((prev) =>
        prev.filter((stock) => stock._id !== stockId)
      );
    } catch (err) {
      console.error(err);
      setError("Failed to remove stock");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading watchlist...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {watchlist.length === 0 ? (
        <p className="text-gray-500">
          No stocks in watchlist. Add from dashboard.
        </p>
      ) : (
        <div className="space-y-4">
          {watchlist.map((stock) => (
            <div
              key={stock._id}
              className="flex justify-between items-center border p-4 rounded-md"
            >
              <div>
                <h2 className="font-semibold">{stock.symbol}</h2>
                <p className="text-sm text-gray-500">{stock.name}</p>
              </div>

              <button
                onClick={() => handleRemove(stock._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
