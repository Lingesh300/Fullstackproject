import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/contacts", form);

    alert("Message submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        background: "#00112b",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #0a2472"
      }}
    >
      <h2 style={{ color: "#00bfff", textAlign: "center" }}>
        Contact Form
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, height: "100px" }}
        />

        <button style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#00bfff",
  color: "black",
  fontWeight: "bold",
  borderRadius: "6px",
  cursor: "pointer"
};
