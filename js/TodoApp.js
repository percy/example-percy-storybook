import React, { useState, useReducer, useMemo } from 'react';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';

const ENTER_KEY = 13;

function uuid() {
  let i, random;
  let uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }

    uuid += (i === 12 ? 4 : (
      i === 16 ? (random & 3 | 8) : random
    )).toString(16);
  }

  return uuid;
}

export default function TodoApp({
  todos: initTodos = [],
  showTodos: initShowTodos = 'all'
}) {
  let [newTodo, setNewTodo] = useState('');
  let [editing, setEditing] = useState(null);
  let [showTodos, setShowTodos] = useState(initShowTodos);

  let [todos, updateTodos] = useReducer((all, action) => {
    switch (action.type) {
      case 'add': return all.concat({ id: uuid(), title: action.title, completed: false });
      case 'destroy': return all.filter(t => t.id !== action.id);
      case 'save': return all.map(t => t.id !== action.id ? t : ({ ...t, title: action.title }));
      case 'toggle': return all.map(t => t.id !== action.id ? t : ({ ...t, completed: !t.completed }));
      case 'toggleAll': return all.map(t => ({ ...t, completed: action.completed }));
      case 'clearCompleted': return all.filter(t => !t.completed);
      default: return all;
    }
  }, initTodos, all => {
    return all.map(t => ({ id: uuid(), completed: false, ...t }));
  });

  let activeTodoCount = useMemo(() => todos.reduce((c, t) => t.completed ? c : c + 1, 0), [todos]);
  let completedTodoCount = useMemo(() => todos.length - activeTodoCount, [todos]);

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          autoFocus={true}
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
          onKeyDown={e => {
            if (e.keyCode !== ENTER_KEY) return;
            e.preventDefault();

            let title = newTodo.trim();

            if (title) {
              updateTodos({ type: 'add', title });
              setNewTodo('');
            }
          }}
        />
      </header>

      {todos.length ? (
        <section className="main">
          <input
            id="toggle-all"
            type="checkbox"
            className="toggle-all"
            checked={activeTodoCount === 0}
            onChange={e => updateTodos({
              type: 'toggleAll',
              completed: e.target.checked
            })}
          />
          <label
            htmlFor="toggle-all"
          />
          <ul className="todo-list">
            {todos.reduce((todos, { id, title, completed }) => {
              let showTodo = (showTodos === 'all') ||
                (showTodos === 'active' && !completed) ||
                (showTodos === 'completed' && completed);

              return !showTodo ? todos : todos.concat(
                <TodoItem
                  key={id}
                  title={title}
                  completed={completed}
                  editing={editing === id}
                  onEdit={() => setEditing(id)}
                  onCancel={() => setEditing(null)}
                  onToggle={() => updateTodos({ type: 'toggle', id })}
                  onDestroy={() => updateTodos({ type: 'destroy', id })}
                  onSave={title => {
                    updateTodos({ type: 'save', id, title });
                    setEditing(null);
                  }}
                />
              );
            }, [])}
          </ul>
        </section>
      ) : null}

      {(activeTodoCount || completedTodoCount) ? (
        <TodoFooter
          showTodos={showTodos}
          activeCount={activeTodoCount}
          completedCount={completedTodoCount}
          onClearCompleted={() => updateTodos({ type: 'clearCompleted' })}
          onShowTodos={setShowTodos}
        />
      ) : null}
    </div>
  );
}
