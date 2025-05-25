import { ChevronRightIcon } from "lucide-react";
import { Trash } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow w-[400px]">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className="bg-slate-400 text-left text-white p-2 rounded-md w-full "
          >
            {task.title}
            {task.completed ? " ✅" : ""}
          </button>

          <button className="bg-slate-400 p-2 rounded-md">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
