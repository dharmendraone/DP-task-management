import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
  <Card className="p-5 text-center shadow-lg" style={{ maxWidth: "500px" }}>
    <h1 className="mb-3">Task Management System</h1>
    <p className="mb-4 text-muted">
      A simple MERN-based task manager where you can create, update, and track
      tasks with priorities and statuses. Register to start managing your tasks today!
    </p>
    <div className="d-flex justify-content-center gap-3">
      <Link to="/register">
        <Button variant="primary">Register</Button>
      </Link>
      <Link to="/login">
        <Button variant="success">Login</Button>
      </Link>
    </div>
  </Card>
</Container>
  );
}
