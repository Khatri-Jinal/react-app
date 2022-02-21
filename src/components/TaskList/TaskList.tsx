import Task from "../Task/Task";
import "./TaskList.css";

interface TaskProps {
  id: number;
  title: string;
  complete: boolean;
}

function TaskList() {
  const tasks: TaskProps[] = [
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
      {tasks.map((props) => {
        return <Task key={props.id} {...props} />;
      })}
    </ul>
  );
}
export default TaskList;
