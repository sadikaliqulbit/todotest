import { useState, useEffect } from "react";
import Statistics from "./components/Statistics";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import TaskModal from "./components/TaskModal";
import DeleteTaskModel from "./components/DeleteTaskModel";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <Statistics tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskColumn
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        onCardClick={setSelectedTask}
        onDeleteClick={setTaskToDelete}
      />
      <TaskModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
      />
      <DeleteTaskModel
        task={taskToDelete}
        onClose={() => setTaskToDelete(null)}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
      />
    </>
  );
}

export default App;
