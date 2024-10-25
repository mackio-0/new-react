import { create } from "zustand";

const useFaqStore = create((set) => ({
  questions: [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component in React is an independent, reusable piece of UI.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is an object that determines how that component renders and behaves.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is a prop in React?",
      answer:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
      isOpen: false,
    },
  ],

  toggleQuestion: (faqId) =>
    set((state) => ({
      questions: state.questions.map((el) =>
        el.id == faqId
          ? { ...el, isOpen: !el.isOpen }
          : { ...el, isOpen: false }
      ),
    })),
}));

export default useFaqStore;
