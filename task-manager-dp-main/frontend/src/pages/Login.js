import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate("/tasks");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
     <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>
       <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> </Form.Group>
        <Button type="submit" variant="success" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}