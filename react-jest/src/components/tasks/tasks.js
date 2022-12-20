import axios from "axios";
import React, { useEffect, useState } from "react";
import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    (async () => {
      const taskList = await axios.get("http://localhost:3003/tasks")
      setTasks(taskList.data)
    })()
  }, [])

  const addTask = () => {
    axios.post("http://localhost:3003/tasks", {
      title: title,
      author: author,
      isCompleted: isCompleted
    })
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("isCompleted").checked = false
    window.location.reload(true)
  }

  return <div className="container">
    <div className="header">
      <h3>Tasks</h3>
    </div>
    {tasks ? <ul>
      {tasks.map(task =>
        <li key={task.id} data-testid="task"
          style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
          {task.title} by {task.author}</li>
      )}
    </ul> :
      <p>Loading...</p>
    }
    <input placeholder="title?" id="title" data-testid="title"
      onChange={event => setTitle(event.target.value)} /> {" "}
    <input placeholder="author?" id="author" data-testid="author"
      onChange={event => setAuthor(event.target.value)} /> {" "}
    <input type="checkbox" id="isCompleted" data-testid="isCompleted"
      onChange={event => setIsCompleted(event.target.checked)} /> {" "} completed {" "}
    <button data-testid="addTask" onClick={() => addTask()}>+</button>
  </div >
}

export default Tasks