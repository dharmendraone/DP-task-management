import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function TaskEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", priority: "low" });

  useEffect(() => {
    API.get(`/tasks/${id}`).then((res) => {
      setTask({ ...res.data, dueDate: res.data.dueDate?.split("T")[0] });
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/tasks/${id}`, task);
    navigate("/task");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} /><br />
        <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} /><br />
        <input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} /><br />
        <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select><br />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}
