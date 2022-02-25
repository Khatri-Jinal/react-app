import DateAndDay from "../DateAndDay/DateAndDay";
import TaskList, { TaskProps } from "../TaskList/TaskList";
import "./ToDo.css";
import Input from "../Input/Input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
export let timeCheck: number;
function ToDo() {
  const [inputShow, setInputShow] = useState(false);
  const [valid, setValid] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [touched, setTouched] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>(getItems());
  const clickHandler = () => {
    setInputShow((prev) => !prev);
  };
  function checkValidity(e: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(e.target.value);
  }
  function getItems() {
    let list = localStorage.getItem("tasks");
    console.log(typeof list);
    if (list) {
      return JSON.parse(list);
    }
  }
  const submitHandler = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      setTouched(true);
      if (enteredTask === "") {
        setValid(false);
      } else {
        setValid(true);
        const newtitle = enteredTask;
        const newComplete = false;
        const obj = {
          id: Math.random(),
          title: newtitle,
          complete: newComplete,
        };
        setTasks([...tasks, obj]);
        setEnteredTask("");
      }
    },
    [enteredTask, tasks]
  );
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInputShow(false);
      }
      if (event.key === "Enter") {
        submitHandler(event);
      }
      console.log(event.key);
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [submitHandler]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="to-do">
      <DateAndDay />
      <TaskList tasks={tasks} />
      {inputShow && (
        <Input
          checkValidity={checkValidity}
          enteredTask={enteredTask}
          valid={valid}
          touched={touched}
        />
      )}
      {!inputShow && (
        <button className="add-btn" onClick={clickHandler}>
          +
        </button>
      )}
    </div>
  );
}
export default ToDo;
