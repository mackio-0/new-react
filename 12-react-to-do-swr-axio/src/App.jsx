import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import useSWR, { mutate, useSWRConfig } from "swr";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  // app state
  // const [tasks, setTask] = useState([]);
  // console.log(import.meta.env.VITE_TODO_API);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_TODO_API}/tasks`,
    fetcher
  );

  const {} = useSWRConfig();

  // if (isLoading == true) {
  //   console.log("loading")
  // }

  const toDoApi = axios.create({
    baseURL: `${import.meta.env.VITE_TODO_API}/tasks`,
    headers: {
      "Content-Type": "application/json",
    }
  })

  const addTask = async (newTask) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // const data = await res.json();

    // mutate("http://localhost:5000/tasks");
    // setTask([...tasks, newTask]);

    // await axios.post("http://localhost:5000/tasks", newTask, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // });
    // mutate("http://localhost:5000/tasks");

    await toDoApi.post("/", newTask);
    mutate(`${import.meta.env.VITE_TODO_API}/tasks`);

  };

  const removeTask = async (id) => {
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    // mutate("http://localhost:5000/tasks");
    // setTask(tasks.filter((task) => task.id !== id));

    // await axios.delete(`http://localhost:5000/tasks/${id}`);
    // mutate("http://localhost:5000/tasks");

    await toDoApi.delete(`/${id}`);
    mutate(`${import.meta.env.VITE_TODO_API}/tasks`);
  };

  const doneTask = async (id, currentDoneTask) => {
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify({ isDone: !currentDoneTask }),
    // });

    // mutate("http://localhost:5000/tasks");
    // setTask(
    // tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    // );

    // await axios.patch(`http://localhost:5000/tasks/${id}`, {
    //   isDone: !currentDoneTask
    // }, {
    //   headers: {
    //     "Content-Type": 'application/json'
    //   }
    // })
    // mutate("http://localhost:5000/tasks");

    await toDoApi.patch(`/${id}`, {
      isDone: !currentDoneTask
    });
    mutate(`${import.meta.env.VITE_TODO_API}/tasks`);

  };

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      {isLoading ? (
        "Loading..."
      ) : (
        <TaskList doneTask={doneTask} removeTask={removeTask} tasks={data} />
      )}
    </div>
  );
};

export default App;
