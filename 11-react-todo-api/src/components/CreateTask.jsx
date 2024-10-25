import React, { useState } from "react";
import Swal from "sweetalert2";
import "ldrs/dotStream";

// Default values shown

const CreateTask = ({ addTask, sending }) => {
  const [job, setJob] = useState("");

  // hourglass.register();

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    if (job.trim()) {
      const newTask = {
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Empty Task",
        text: "Please add a Task!",
      });
    }
  };

  return (
    <div className=" flex mb-5">
      <input
        type="text"
        className=" flex-grow  border-2 disabled:bg-slate-300 border-slate-300  rounded-l-lg p-2"
        value={job}
        disabled={sending}
        onChange={handleOnChange}
        placeholder="Write your new task"
      />
      <button
        onClick={handleAddTaskBtn}
        disabled={sending}
        className=" bg-slate-300 border-2 disabled:opacity-50 border-slate-300  rounded-r-lg py-2 px-4"
      >
        {sending ? (
          <l-dot-stream size="60" speed="2.5" color="black"></l-dot-stream>
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
