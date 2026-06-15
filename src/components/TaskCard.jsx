import React from "react"; 
import { MdDelete } from "react-icons/md";

const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

function TaskCard({ task, updateTaskStatus, deleteTask, onCardClick, onDeleteClick }) {
  const isDone = task.status === "done"; 

  return (
    <div onClick={() => onCardClick(task)} className="p-4 bg-white rounded-lg shadow-md mb-3 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-semibold font-subtitle">{task.title}</span>
        <span
          className={`${priorityColors[task.priority]}  text-white px-3 py-1 rounded-full text-xs`}
        >
          {task.priority}
        </span>
        <div 
          disabled={isDone}
          className={`px-3 py-2 rounded-md text-white text-sm font-medium ${
            isDone
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-red-500 hover:bg-red-600 cursor-pointer"
          }`}
          onClick={(e) => { e.stopPropagation(); onDeleteClick(task); }}
        >
          <MdDelete />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2"> 
        
      </div>
    </div>
  );
}

export default TaskCard;
