import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
//   const [count, setCount] = useState(0);

const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();
  const handleIncrement = () => {
      // setCount(count + 1);
      increaseCount(3);
  };

  const handleDecrease = () => {
    // setCount(count - 1);
    decreaseCount();
  };

  const handleReset = () => {
    // setCount(0);
    resetCount();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">React Counter</h1>
        <p className="text-5xl font-semibold mb-6">{count}</p>
        <div className="flex justify-center gap-5">
          <button onClick={handleDecrease} className="bg-red-500 text-white py-2 px-4 rounded-full text-center hover:bg-red-700 text-3xl w-12 h-12 flex justify-center items-center">
            -
          </button>
          <button onClick={handleIncrement} className="bg-green-500 text-white py-2 px-4 rounded-full text-center hover:bg-green-700 text-3xl w-12 h-12 flex justify-center items-center">
            +
          </button>
        </div>
        <button onClick={handleReset} className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
