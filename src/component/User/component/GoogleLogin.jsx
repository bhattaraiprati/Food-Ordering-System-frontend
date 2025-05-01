import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";

const GoogleLoginButton = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleSuccess = async (credentialResponse) => {
    try {
      // Decode the JWT token to get user info
      const decodedUser = jwt_decode(credentialResponse.credential);
      console.log("Decoded user info:", decodedUser);

      // Send the token to your backend
      const response = await axios.post(
        "http://localhost:8000/api/auth/google/",
        {
          access_token: credentialResponse.credential,
        }
      );

      // Handle the response from your backend
      console.log("Backend response:", response.data);

      // Store the token in localStorage for future requests
      localStorage.setItem("authToken", response.data.key);

      // Update user state
      setUser(decodedUser);

      // You can redirect the user or update your app state here
    } catch (error) {
      console.error("Error with Google login:", error);
      setError("Login failed. Please try again.");
    }
  };

  const handleError = () => {
    setError("Login failed. Please try again.");
  };

  // Show user info if logged in
  if (user) {
    return (
      <div className="user-info">
        <img src={user.picture} alt="User profile" />
        <h3>Welcome, {user.name}!</h3>
        <p>{user.email}</p>
        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            setUser(null);
          }}
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="google-login">
      {error && <p className="error">{error}</p>}
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        text="continue_with"
        shape="pill"
      />
    </div>
  );
};

export default GoogleLoginButton;
