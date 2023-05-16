import { useState } from "react";
import { StyleList } from "./style";
export function ToDoList() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const initalData = (event) => {
    setData(event.target.value);
  };
  const handleClick = () => {
    setList((prevList) => [...prevList, data]);
    // [..., newItem]
    // [[{...}], newItem]
    setData("");
  };
  return (
    <StyleList>
      <div className="container">
          <div className="main-content">
            <form
              className="form-class"
              onSubmit={(event) => event.preventDefault()}
            >
              <p className="">Welcome to To Do List Online Website</p>
              <input
                type="text"
                placeholder="please enter your task"
                onChange={initalData}
                value={data}
              />
              <button onClick={handleClick}>Add</button>
            </form>
            <div className="task-list">
              <h3>List of Tasks:</h3>
              <div>
                {list.map((task, index) => (
                  <p className="task-item" key={index}>{`${
                    index + 1
                  }. ${task}`}</p>
                ))}
              </div>
            </div>
          </div>
      </div>
    </StyleList>
  );
}
