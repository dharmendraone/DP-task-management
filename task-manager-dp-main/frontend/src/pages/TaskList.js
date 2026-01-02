import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import { Card, Button, Badge, Container, Row, Col } from "react-bootstrap";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await API.get(`/tasks?page=${page}&limit=5`);
        setTasks(data.tasks);
        setTotal(data.total);
      } catch (err) {
        if (err.response?.status === 401) navigate("/login");
      }
    };
    fetchTasks();
  }, [page, navigate]);

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    await API.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const updateStatus = async (id, status) => {
    await API.patch(`/tasks/${id}/status`, { status });
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? { ...t, status } : t))
    );
  };

  const getPriorityVariant = (priority) => {
    if (priority === "high") return "danger";
    if (priority === "medium") return "warning";
    return "success";
  };

  const getStatusVariant = (status) => {
    return status === "completed" ? "info" : "secondary";
  };

  return (
    <Container className="my-4 text-center">
      <h2 className="mb-4">My Tasks</h2>
      <Row className="justify-content-center">
        {tasks.map((task) => (
          <Col md={8} lg={6} key={task._id} className="mb-3">
            <Card
              bg={getPriorityVariant(task.priority).toLowerCase()}
              text={task.priority === "medium" ? "dark" : "white"}
              className="shadow"
            >
              <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>
                  <strong>Due:</strong>{" "}
                  {new Date(task.dueDate).toLocaleDateString()}
                  <br />
                  <Badge bg={getStatusVariant(task.status)} className="mt-2">
                    {task.status.toUpperCase()}
                  </Badge>
                  {" | "}
                  <Badge bg={getPriorityVariant(task.priority)} className="mt-2">
                    {task.priority.toUpperCase()}
                  </Badge>
                </Card.Text>

                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <Link to={`/task/${task._id}`}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Link>
                  <Link to={`/edit/${task._id}`}>
                    <Button variant="warning" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() =>
                      updateStatus(
                        task._id,
                        task.status === "pending" ? "completed" : "pending"
                      )
                    }
                  >
                    Mark {task.status === "pending" ? "Completed" : "Pending"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-3">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <span className="px-3 align-self-center"> Page {page} </span>
        <Button
          variant="secondary"
          disabled={page * 5 >= total}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
