import DateAndDay from "../DateAndDay/DateAndDay";
import TaskList from "../TaskList/TaskList";
import "./ToDo.css";

function ToDo() {
  return (
    <div className="to-do">
      <DateAndDay />
      <TaskList />
      <button className="add-btn">+</button>
    </div>
  );
}
export default ToDo;
