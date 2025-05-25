import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para se tornar um desenvolvedor front-end",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript para melhorar as habilidades",
      completed: false,
    },
    {
      id: 3,
      title: "Estudar Design UI/UX",
      description: "Estudar Design UI/UX para melhorar a experiência do usuário",
      completed: false,
    },
  ]);

  // Função para adicionar uma nova tarefa
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center gap-4 pt-10">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
      </div>

      <AddTask
        onAddTaskSubmit={onAddTaskSubmit}
      />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
      />
    </div>
  );
}

export default App;
