import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { Container, Form, Button } from "react-bootstrap";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/tasks", {
      title,
      description,
      dueDate,
      priority,
      assignedTo: localStorage.getItem("userId"),
    });
    navigate("/");
  };

  return (
    <Container className="my-4 text-center">
      <h2>Create New Task</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">
          Create Task
        </Button>
      </Form>
    </Container>
  );
}
