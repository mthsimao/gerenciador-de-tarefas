import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-[400px] flex flex-col gap-4 bg-slate-400 p-6 rounded-md shadow">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="p-2 rounded-md bg-slate-200 outline-slate-500"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Descrição da tarefa"
        className="p-2 rounded-md bg-slate-200 outline-slate-500 resize-none"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-700 text-slate-100 p-2 rounded-md hover:bg-slate-600 transition-colors duration-300"
        onClick={() => {
          // verifica se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert("Título e descrição são obrigatórios");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
