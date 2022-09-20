import React from "react";

const Input = ({ inputTask, setTask , addTaskList, editTaskList, isEdit }) => {
  return (
    <section className="TodoList_input">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <input
                type="text"
                value={inputTask}
                className="form-control"
                placeholder="ADD TASK ..."
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
              <div className="input-group-append">
                
                <button className="btn btn-success" type="button"  onClick={isEdit ? editTaskList : addTaskList}>
                  {isEdit ? <i class="fa-regular fa-pen-to-square"></i> : <i className="fa-solid fa-plus"></i>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input;
