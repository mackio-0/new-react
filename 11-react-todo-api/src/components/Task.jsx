import React from "react";
import Swal from "sweetalert2";
import TaskSkeletonLoader from "./TaskSkeletonLoader";
import 'ldrs/square'


const Task = ({
  job: { id, task, isDone },
  removeTask,
  doneTask,
  deleting,
  checkedLoading,
}) => {
  const handleRemoveTaskBtn = () => {
    Swal.fire({
      title: "Are you sure to delete this task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeTask(id);
        Swal.fire({
          title: "Deleted!",
          icon: "success",
        });
      }
    });

    // confirm("Are you sure you want to delete it?") && removeTask(id);
  };

  const handleOnChange = () => {
    doneTask(id, isDone);
  };

  // console.log(deleting)

  if (deleting && deleting[id]) {
    return <TaskSkeletonLoader />;
  }
  return (
    <div className=" flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <div className=" flex items-center gap-3">
        {checkedLoading && checkedLoading[id] ? (
          <l-square
          size="16"
          stroke="3"
          stroke-length="0.25"
          bg-opacity="0.2"
          speed="1.2"
          color="gray" 
        ></l-square>
        ) : (
          <input
            type="checkbox"
            onChange={handleOnChange}
            checked={isDone}
            className="size-4"
          />
        )}
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-red-100 border-2 border-red-100  rounded-lg py-2 text-red-700 px-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;