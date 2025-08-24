import React, { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // Estados para simular a estrutura (sem funcionalidade real ainda)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  const adicionarTarefa = () => {
  if (newTask.trim() === '') return;
  const nova: Task = { id: Date.now(), text: newTask, completed: false };
  setTasks(prev => [...prev, nova]);
  setNewTask('');
};

const completarTarefa = (id: number) => {
  setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
};

const deletarTarefa = (id: number) => {
  setTasks(prev => prev.filter(t => t.id !== id));
};

const filtrarTarefas = tasks.filter(task => {
  if (filter === 'active') return !task.completed;
  if (filter === 'completed') return task.completed;
  return true; // 'all'
});

  return (
    <div className="todo-app">
      <header className="app-header">
        <h1>Minhas Tarefas</h1>
        <p>Organize seu dia com eficiência</p>
      </header>

      <div className="task-creator">
        <input
  type="text"
  className="task-input"
  placeholder="Adicione uma nova tarefa..."
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()}
/>
        <button className="add-button" onClick={adicionarTarefa}>
  Adicionar
</button>
      </div>

      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Pendentes
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Concluídas
        </button>
      </div>

     <div className="tasks-container">
      {filtrarTarefas.length === 0 && (
          <p className="empty-hint">Sem tarefas para exibir.</p>
        )}
  {filtrarTarefas.map(task => (
    <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => completarTarefa(task.id)}
        />
        <label></label>
      </div>
      <span className="task-text">{task.text}</span>
      <button className="delete-btn" onClick={() => deletarTarefa(task.id)}>×</button>
    </div>
  ))}
</div>


      <div className="tasks-info">
        <p>Total de tarefas: <span>{tasks.length}</span></p>
      </div>

      <footer className="app-footer">
        <p>Feito por <span>#TeamCodersGrupo7</span></p>
      </footer>
    </div>
  );
};

export default TodoList;
