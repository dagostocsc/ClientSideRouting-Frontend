import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router";

const navigate = useNavigate();
//With the routes in place, we can declare routes, Links

const App = () => {

  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

    return(
    <div>
      <NavBar />
      <Routes>
        <Route
          path ="./TaskList" element = {<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />} 
        />
        <Route
          path ="./AddTask" element ={<AddTask fetchAllTasks={fetchAllTasks} />} 
        />
      </Routes>
    </div>)

}

{/* <>
<Link to ={`/Addtask/${Taskid}`}>AllTasks</Link>
<Link to ="/">text</Link>
<Link to ="/">text</Link>
</> */}


const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
