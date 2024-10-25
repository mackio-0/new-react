import React from "react";

const TaskSkeletonLoader = () => {
  return (
    <div className="animate-pulse ">
      <div className=" flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0 opacity-80">
        <div className="flex items-center gap-3">
          <div className="rounded-sm bg-gray-300 h-5 w-5"></div>
          <div className="rounded-full bg-gray-300 h-5 w-56"></div>
        </div>
        <div className="rounded-lg bg-gray-300 h-10 w-20"></div>
      </div>
    </div>
  );
};

export default TaskSkeletonLoader;
