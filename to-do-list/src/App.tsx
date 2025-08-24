import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState(""); 
  const [lista, setLista] = useState<string[]>([]); 

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return; 
    setLista([...lista, tarefa]); 
    setTarefa(""); 
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>

     
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite uma tarefa"
      />

      
      <button onClick={adicionarTarefa}>Adicionar</button>

     
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
