import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import API from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, password });
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Error registering user");
    }
  };

  return (
     <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Register</h3>
       <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}