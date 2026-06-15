import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Input } from "../common/FormFields";

const columns = [
  { key: "all", label: "All Tasks" },
  { key: "todo", label: "Todo" },
  { key: "in-progress", label: "In Progress" },
  { key: "done", label: "Done" },
];

function TaskColumn({ tasks, updateTaskStatus, deleteTask, onCardClick }) {
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const getByStatus = (key) =>
    key === "all" ? filtered : filtered.filter((t) => t.status === key);

  return (
    <section className="p-5">
      <div className="p-5 bg-[#cbd7ff] rounded-lg flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold font-title">Task Board</h2>
        <Input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {columns.map(({ key, label }) => (
          <div
            key={key}
            className="p-2 bg-white rounded-lg shadow-md h-full max-h-[600px] overflow-y-auto"
          >
            <h3 className="text-xl font-title font-semibold mb-4 bg-[#cbd7ff] rounded-md p-1 flex justify-between">
              {label}
              <span className="bg-gray-700 text-white text-sm rounded-full px-2 flex items-center">
                {getByStatus(key).length}
              </span>
            </h3>
            {getByStatus(key).length === 0 ? (
              <p className="text-gray-400 text-sm text-center py-4">No tasks</p>
            ) : (
              getByStatus(key).map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  updateTaskStatus={updateTaskStatus}
                  deleteTask={deleteTask}
                  onCardClick={onCardClick}
                />
              ))
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskColumn;
