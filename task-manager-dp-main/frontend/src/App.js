import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";
import TaskDetails from "./pages/TaskDetails";
import TaskEdit from "./pages/TaskEdit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;