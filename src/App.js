import React, { useState } from "react";
import "./style.css";
import Task from "./components/Task";
import Input from "./components/Input";
import Header from "./components/Header";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [editedId, setEditedId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  // var editedId = null;
  const [taskList, setTaskList] = useState([
    {
      Task: "Task One",
      isComplete: false,
    },
    {
      Task: "Task two",
      isComplete: true,
    },
    {
      Task: "Task three",
      isComplete: false,
    },
  ]);

  const addTasks = () => {
    if (taskInput === "") {
      alert("Plz add Task First");
    } else {
      setTaskList((oldData) => {
        return [...oldData, { Task: taskInput, isComplete: false }];
      });
    }
    setTaskInput("");
  };

  const deleteItem = (id) => {
    setTaskList((oldData)=>{
      return oldData.filter((item , index) => {
         return index !== id;
      })
    })
  };

  const TaskDone = (id, Task) => {
    const tempArry = [...taskList];
    tempArry.splice(id , 1 , {Task:Task,isComplete:true})
    setTaskList(tempArry);
  }

  const editTask =(id, Task) =>{
    setIsEdit(true);
    setTaskInput(Task);
    setEditedId(id);
  }

  const editTaskList = () => {
    // console.log(editedId);
    const tempArry = [...taskList];
    tempArry.splice(editedId , 1 , {Task:taskInput,isComplete:false})
    setTaskList(tempArry);
    setTaskInput('');
    setIsEdit(false);
  }

  return (
    <>
      <div className="main_container">
        <Header />
        <Input
          inputTask={taskInput}
          setTask={setTaskInput}
          addTaskList={addTasks}
          isEdit={isEdit}
          editTaskList={editTaskList}
        />
        <section className="TodoList_items">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                {taskList?.map((task, index) => {
                  return (
                    <Task
                      key={index}
                      id={index}
                      taskList={task}
                      setTaskList={setTaskList}
                      deleteItem={deleteItem}
                      TaskDone={TaskDone}
                      editTask={editTask}
                    />
                  );
                })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
