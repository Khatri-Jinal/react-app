import ListCheck from "../ListCheck/ListCheck";
import "./TaskList.css";

interface Task {
  id: number;
  title: string;
  complete: boolean;
}
function TaskList() {
  const tasks: Task[] = [
    { id: 1, title: "Buy new sweatshirt", complete: true },
    { id: 2, title: "Begin promotional phase", complete: true },
    { id: 3, title: "Read an article", complete: false },
    { id: 4, title: "Try not to fall asleep", complete: false },
    { id: 5, title: "watch 'Sherlock'", complete: false },
    { id: 6, title: "Begin QA for the product", complete: false },
    { id: 7, title: "Go for a walk", complete: false },
  ];
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className={task.complete ? "task complete" : "task"}
          >
            <span className="title">{task.title}</span>
            <span>
              <ListCheck />
            </span>
          </li>
        );
      })}
    </ul>
  );
}
export default TaskList;
