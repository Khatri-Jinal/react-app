import ListCheck from "../ListCheck/ListCheck";
import "./Task.css";

interface TaskProps {
  id: number;
  title: string;
  complete: boolean;
}

function Task(props: TaskProps) {
  return (
    <li className={props.complete ? "task complete" : "task"}>
      <span className="title">{props.title}</span>
      <span>
        <ListCheck />
      </span>
    </li>
  );
}
export default Task;
