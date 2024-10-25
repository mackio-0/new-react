import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  // app state
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [deleting, setDeleting] = useState({});
  const [checkedLoading, setCheckedLoading] = useState({})

  const addTask = async (newTask) => {
    // console.log("new task", newTask);
    setSending(true);

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    // console.log("data", data);

    setTask([...tasks, data]);
    // fetchTasks();
    setSending(false);
  };

  const removeTask = async (id) => {
    setDeleting({[id]: true });
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    // const data =  await res.text();
    // console.log(data)
    setTask(tasks.filter((task) => task.id !== id));
    setDeleting({[id]: false });
  };

  const doneTask = async (id, currentDoneState) => {
    setCheckedLoading({[id]: true})
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentDoneState }),
    });

    const data = await res.json();
    // console.log(data);

    setTask(tasks.map((el) => (el.id === id ? data : el)));
    setCheckedLoading({[id]: false})
  };

  const fetchTasks = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
    // console.log(data)
  };

  useEffect(() => {
    // console.log("hello world");
    fetchTasks();
  }, []);

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask sending={sending} addTask={addTask} />
      <TaskList
        doneTask={doneTask}
        removeTask={removeTask}
        deleting={deleting}
        checkedLoading={checkedLoading}
        tasks={tasks}
      />
      {taskLoading && <SkeletonLoader />}
    </div>
  );
};

export default App;
