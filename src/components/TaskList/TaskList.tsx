import Task from "../Task/Task";
import "./TaskList.css";

export interface TaskProps {
  id: number;
  title: string;
  complete: boolean;
}
interface TaskListProps {
  tasks: TaskProps[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </ul>
  );
}
export default TaskList;

// const tasks: TaskProps[] = [
//   { id: 1, title: "Buy new sweatshirt", complete: true },
//   { id: 2, title: "Begin promotional phase", complete: true },
//   { id: 3, title: "Read an article", complete: false },
//   { id: 4, title: "Try not to fall asleep", complete: false },
//   { id: 5, title: "watch 'Sherlock'", complete: false },
//   { id: 6, title: "Begin QA for the product", complete: false },
//   { id: 7, title: "Go for a walk", complete: false },
// ];
