import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    API.get(`/tasks/${id}`).then((res) => setTask(res.data));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Assigned To: {task.assignedTo?.username || "N/A"}</p>
    </div>
  );
}
