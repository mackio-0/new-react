import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
  ],
  //   addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) })),
  doneTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id == taskId ? { ...el, isDone: !el.isDone } : el
      ),
    })),
}));

export default useTaskStore;
