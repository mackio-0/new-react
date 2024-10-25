import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, doneTask, deleting, checkedLoading }) => {
  return (
    <div>
      <h3 className=" font-bold font-serif text-xl mb-3">
        Task List (Total {tasks.length}, Done{" "}
        {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task
          doneTask={doneTask}
          removeTask={removeTask}
          deleting={deleting}
          checkedLoading={checkedLoading}
          key={el.id}
          job={el}
        />
      ))}
    </div>
  );
};

export default TaskList;
