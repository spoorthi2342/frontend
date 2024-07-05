"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log("Login successful:", token); // Debug log
        localStorage.setItem("authToken", token);

        const decoded = jwt_decode(token);
        console.log("Decoded jwt", decoded);

        if (decoded.role === "admin") {
          router.push("/admin"); // Redirect to admin page
        } else {
          router.push("/"); // Redirect to home page
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login failed:", error);
    }
  };

  const handleRoleChange = (e) => {
    setIsAdmin(e.target.value === "admin");
    if (e.target.value === "admin") {
      setEmail("admin@gmail.com");
      setPassword("admin");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="user"
                checked={!isAdmin}
                onChange={handleRoleChange}
                className="mr-2"
              />
              User
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={isAdmin}
                onChange={handleRoleChange}
                className="mr-2"
              />
              Admin
            </label>
          </div>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isAdmin}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isAdmin}
          />
          <button
            className="w-full py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            type="submit"
          >
            Login
          </button>
          <a className="text-blue-500">Forgot Password?</a>
        </form>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
