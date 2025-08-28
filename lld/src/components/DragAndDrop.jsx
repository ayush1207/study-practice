import React, { useRef } from "react";
import { useState } from "react";
const data = {
  PENDING: ["Task 1", "Task 2"],
  IN_PROGRESS: ["Task 3"],
  COMPLETED: ["Task 4"],
  ARCHIVED: ["Task 5", "Task 6"],
};
const DragAndDrop = () => {
  const [todoData, setTodoData] = useState(data);
  const element = useRef(null);
  const container = useRef(null);

  const handleDragStart = (e, task, status) => {
    element.current = task;
    container.current = status;
    e.target.style.opacity = "0.5";
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  }

  const handleDrop = (e, targetContainer) => {
    setTodoData((prevData) => {
        const newTodo= {...prevData};
        const sourceContainer = container.current;
        const task = element.current;

        newTodo[sourceContainer] = newTodo[sourceContainer].filter((item) => item !== task);
        newTodo[targetContainer] = [...newTodo[targetContainer], task];
        
        return newTodo;
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className="dragDropContainer parentContainer">
      <div className="dragDropContent">
        {Object.keys(todoData).map((status, index) => (
          <div key={status + index} className="dragDropColumn"
          onDrop={(e) => handleDrop(e, status)}
            onDragOver={handleDragOver}
          >
            <h3>{status}</h3>
            <div className="dragDropList">
              {todoData[status].map((task, idx) => (
                <div
                  className="task"
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, status)}
                  onDragEnd={(e) => handleDragEnd(e)}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
