import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Enter your email";
    if (!password.trim()) newErrors.password = "Enter your password";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    localStorage.setItem("user", JSON.stringify({ email }));

    setSuccessMessage("Successfully signed in!");
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/select-address"); // navigate to address selection
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d1a8a1] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white  p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#1e4a4f] text-white py-2 rounded hover:bg-[#16383c]"
        >
          Sign In
        </button>

        {successMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-center">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
