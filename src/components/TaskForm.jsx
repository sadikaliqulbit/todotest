import React from "react";
import { Button, Input, Select } from "../common/FormFields";
import { useState } from "react";

function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description:"",
    priority: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    else if (formData.title.trim().length < 3)
      newErrors.title = "Title must be at least 3 characters";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.priority) newErrors.priority = "Priority is required";
    if (!formData.status) newErrors.status = "Status is required";
    return newErrors;
  };

  const hendleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const existing = JSON.parse(localStorage.getItem("tasks") || "[]");

    const newTask = { ...formData, id: Date.now() };

    localStorage.setItem("tasks", JSON.stringify([...existing, newTask]));

    setFormData({ title: "",description:"", priority: "", status: "" });
    setErrors({});
  };

  return (
    <>
      <section className="w-full mx-auto p-5">
        <div className=" bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4 font-title">Add New Task</h2>
          <form
            className="lg:flex  md:grid md:grid-cols-2 md:gap-3"
            onSubmit={hendleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <Input
                type="text"
                id="title"
                placeholder="Enter task"
                value={formData.title}
                className="w-full"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                className="w-full h-[40%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-700 font-medium mb-2"
              >
                Priority
              </label>
              <Select
                id="priority"
                className="w-full"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
              >
                <option value="">select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Select>
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">{errors.priority}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium mb-2"
              >
                Status
              </label>
              <Select
                id="status"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="">select</option>
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </Select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">{errors.status}</p>
              )}
            </div>
            <div className="mt-6">
              <Button>Add Task</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default TaskForm;
