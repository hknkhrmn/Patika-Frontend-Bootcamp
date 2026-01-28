import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Have a life!', completed: false }
  ]);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const editInputRef = useRef(null);

  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingId]);

  const addTodo = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('.new-todo');
    const text = input.value.trim();
    
    if (text) {
      setTodos([...todos, {
        id: Date.now(),
        text,
        completed: false
      }]);
      input.value = '';
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    const text = editText.trim();
    if (text) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      ));
    } else {
      deleteTodo(id);
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleEditKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeTodoCount;

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTodo}>
            <input 
              className="new-todo" 
              placeholder="What needs to be done?" 
              autoFocus 
            />
          </form>
        </header>
        
        {todos.length > 0 && (
          <section className="main">
            <input 
              id="toggle-all"
              className="toggle-all" 
              type="checkbox" 
              checked={todos.length > 0 && activeTodoCount === 0}
              onChange={toggleAll}
            />
            <label htmlFor="toggle-all">
              Mark all as complete
            </label>
            <ul className="todo-list">
              {filteredTodos.map(todo => (
                <li 
                  key={todo.id} 
                  className={`${todo.completed ? 'completed' : ''} ${editingId === todo.id ? 'editing' : ''}`}
                >
                  <div className="view">
                    <input 
                      className="toggle" 
                      type="checkbox" 
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <label onDoubleClick={() => startEdit(todo.id, todo.text)}>
                      {todo.text}
                    </label>
                    <button 
                      className="destroy"
                      onClick={() => deleteTodo(todo.id)}
                    ></button>
                  </div>
                  {editingId === todo.id && (
                    <input
                      ref={editInputRef}
                      className="edit"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => saveEdit(todo.id)}
                      onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {todos.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{activeTodoCount}</strong>
              {' '}{activeTodoCount === 1 ? 'item' : 'items'} left
            </span>
            <ul className="filters">
              <li>
                <a 
                  className={filter === FILTERS.ALL ? 'selected' : ''}
                  onClick={() => setFilter(FILTERS.ALL)}
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  className={filter === FILTERS.ACTIVE ? 'selected' : ''}
                  onClick={() => setFilter(FILTERS.ACTIVE)}
                >
                  Active
                </a>
              </li>
              <li>
                <a 
                  className={filter === FILTERS.COMPLETED ? 'selected' : ''}
                  onClick={() => setFilter(FILTERS.COMPLETED)}
                >
                  Completed
                </a>
              </li>
            </ul>
            {completedCount > 0 && (
              <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
              </button>
            )}
          </footer>
        )}
      </section>
      
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created with React</p>
        <p>Part of <a href="https://todomvc.com/">ToDoMvc</a></p>
      </footer>
    </div>
  );
}