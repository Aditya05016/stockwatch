import { useState } from "react";
import {RegisterRequest} from "../services/axios"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError("All fields are required");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await RegisterRequest({
        name,
        email,
        password,
      });

      console.log("Register success:", response.data);

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Something went wrong", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

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
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-500 w-full p-2 mt-1 font-semibold text-white rounded-md disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-500 text-center mt-3">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Register;
