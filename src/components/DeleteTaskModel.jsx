import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteTaskModel({ task, onClose, deleteTask, }) {
  if (!task) return null;
  const isDone = task.status === "done";
  const handleDelete = () => {
    deleteTask(task.id);
    onClose();
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
            Are you sure you want to delete{" "}
            <span className="text-red-600">{task.title}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={handleDelete}
            disabled={isDone}
            className={`flex items-center gap-2 mx-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full justify-center
            ${isDone ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            <MdDelete size={18} /> Ok
          </button>
          <button
            onClick={onClose}
            className={`flex items-center gap-2 border bg-slate-400 text-black px-4 py-2 rounded-lg text-sm font-medium w-full justify-center`}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTaskModel;
