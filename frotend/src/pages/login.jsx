import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      if (email.trim() === "") {
        setError("Email is required");
        setLoading(false);
        return;
      }

      if (password.length < 5) {
        setError("Password is too short");
        setLoading(false);
        return;
      }

      const response = await loginRequest({ email, password });
      const token = response.data.token;

      login(token);
      navigate("/dashboard");

      setEmail("");
      setPassword("");
      setLoading(false);

    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Account
        </h2>

        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
              </svg>
              Logging in...
            </>
          ) : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          New to StockEdge?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold underline"
          >
            Register here
          </button>
        </p>

        {error && (
          <p className="text-red-500 text-center mt-3">{error}</p>
        )}

      </div>

    </div>
  );
}

export default Login;
