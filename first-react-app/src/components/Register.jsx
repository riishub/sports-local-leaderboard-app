import { useState } from "react";
import { useNavigate } from "react-router-dom"
function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate =useNavigate()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registered successfully");
      navigate("/login")
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input name="username" placeholder="username" onChange={handleChange} />
      <input type="password" name="password" placeholder="password" onChange={handleChange} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;