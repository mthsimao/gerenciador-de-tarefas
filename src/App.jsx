import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {

  return (
    <div>
      <h1 className="text-3xl text-blue-500">Gerenciador de Tarefas</h1>

      <AddTask />
      <Tasks />
    </div>
  )
}

export default App
