import React, { useState } from "react";
import "./Table.css";

// component imports
import Header from './components/Header';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import DateInput from './components/DateInput';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("Please select a future date for the deadline.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      task,
      priority,
      deadline,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setPriority("top");
    setDeadline("");
  };

  const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const upcomingTasks = tasks.filter((t) => !t.done);

  const styles = {
    appStyles: {
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "azure",
      color: "purple"
    },
    mainStyles: {
      maxWidth: "50rem",
      margin: "1.2rem auto",
      padding: "1.2rem",
      backgroundColor: "antiquewhite",
      boxShadow: "0rem 0.2rem 1rem grey",
      borderRadius: "1rem"
    },
    taskFormStyles: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.2rem",
      marginBottom: "2.5rem"
    },
    taskFormHeadingStyles: {
      color: "purple"
    },
    buttonStyles: {
      backgroundColor: "green",
      color: "white",
      padding: "0.8rem",
      border: "0.2rem solid darkgreen",
      fontSize: "1.2rem",
      flex: 1,
      borderRadius: "1.2rem",
      cursor: "pointer"
    }
  }

  return (
    <div style={styles.appStyles}>
      <Header
        textContent="Task Manager"
      />
      <main
        style={styles.mainStyles}
      >
        <div 
        style={styles.taskFormStyles}
        className="task-form">
          <TextInput
            id="task"
            placeholder="Enter task..."
            value={task}
            onChange={handleTaskChange}
          />
          <SelectInput
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
          />
          <DateInput
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <button 
            style={styles.buttonStyles}
            id="add-task"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <h2 style={styles.taskFormHeadingStyles}>
          Upcoming Tasks
        </h2>
        <div className="task-list" id="task-list">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTasks.map((t) => (
                <tr key={t.id}>
                  <td>{t.task}</td>
                  <td>{t.priority}</td>
                  <td>{t.deadline}</td>
                  <td>
                    {!t.done && (
                      <button
                        style={styles.buttonStyles}
                        onClick={() => markDone(t.id)}
                      >
                        Mark Done
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="completed-task-list">
          <h2 style={styles.taskFormHeadingStyles}>
            Completed Tasks
          </h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((ct) => (
                <tr key={ct.id}>
                  <td>{ct.task}</td>
                  <td>{ct.priority}</td>
                  <td>{ct.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
