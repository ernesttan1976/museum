import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("No error");
  const [token, setToken] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSecret = async () => {
    try {
      const response = await fetch("/api/secret", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setError(JSON.stringify(data));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        {error}
        <fieldset>
          <legend>Login</legend>
          <label>
            Email: <input name="email" />
          </label>
          <label>
            Password: <input name="password" />
          </label>
          <button>Login</button>
        </fieldset>
      </form>
      <button onClick={handleSecret}>Secret</button>
    </>
  );
}
