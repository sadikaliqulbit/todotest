import React from "react";
import { MdDelete } from "react-icons/md";
import { Select } from "./common/FormFields";

const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

function TaskModal({ task, onClose, deleteTask, updateTaskStatus }) {
  if (!task) return null;
  const isDone = task.status === "done";

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      deleteTask(task.id);
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800 font-title">
            {task.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 font-medium mb-1">Description</p>
          <p className="text-gray-700">
            {task.description || "No description"}
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Priority</p>
            <span
              className={`${priorityColors[task.priority]} text-white px-3 py-1 rounded-full text-xs`}
            >
              {task.priority}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Status</p>
            <Select
              value={task.status}
              onChange={(e) => { updateTaskStatus(task.id, e.target.value); onClose(); }}
              disabled={isDone}
              onClick={(e) => e.stopPropagation()}
              
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </Select>
          </div>
        </div>

        <button
          onClick={handleDelete}
          disabled={isDone}
          className={`flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full justify-center
            ${isDone ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >
          <MdDelete size={18} /> Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
