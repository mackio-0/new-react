import React from "react";

const ShowTime = ({timestamp}) => {
  const createDate = new Date(timestamp).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const createTime = new Date(timestamp).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div>
      <p className=" text-xs">{createDate}</p>
      <p className=" text-xs">{createTime}</p>
    </div>
  );
};

export default ShowTime;
