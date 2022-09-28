import React from "react";
import "../styles/TodoLoading.css";

const TodoLoading = () => {
  return (
    <div className="container-span-loading">
      <span className="icon-loading">✋</span>
      <p className="text-loading">Un Segundo...</p>
    </div>
  );
};

export default TodoLoading;
