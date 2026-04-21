import { useState } from "react";
import {useNavigate} from "react-router-dom"


function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("username", data.username);
      navigate("/cricket")
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="username" placeholder="username" onChange={handleChange} />
      <input name="password" placeholder="password" onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;