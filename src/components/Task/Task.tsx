import ListCheck from "../ListCheck/ListCheck";
import "./Task.css";

interface TaskProps {
  id: number;
  title: any;
  complete: any;
}

function Task({ id, title, complete }: TaskProps) {
  return (
    <li key={id} className={complete ? "task complete" : "task"}>
      <span className="title">{title}</span>
      <span>
        <ListCheck />
      </span>
    </li>
  );
}
export default Task;
