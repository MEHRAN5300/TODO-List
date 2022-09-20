import React from "react";

const Task = ({ taskList,deleteItem,TaskDone,editTask,id }) => {
  return (
    <>
      <li>
        <div className="row no-gutters align-self-center">
          <div className="col-9">
            <p>
              {taskList.isComplete ? <s>{taskList.Task}</s> : taskList.Task}
            </p>
          </div>
          <div className="col-1">
            <button
              disabled={taskList.isComplete}
              className="btn btn-success"
              onClick={() => {
                
                TaskDone(id, taskList.Task);
              }}
            >
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-info"
              type="button"
              onClick={() => {
                editTask(id, taskList.Task);
              }}
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                deleteItem(id);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Task;
