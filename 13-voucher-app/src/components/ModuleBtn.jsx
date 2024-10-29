import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, url, icon }) => {
  return (
    <Link to={url} className=" flex flex-col h-full items-center bg-blue-500 text-white p-5 gap-3 rounded-lg">
      {icon}
      {/* <br /> */}
      {name}
    </Link>
  );
};

export default ModuleBtn;
