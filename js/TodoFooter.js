import React from 'react';
import classNames from 'classnames';

function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}

export default function TodoFooter({
  activeCount,
  completedCount,
  showTodos,
  onClearCompleted,
  onShowTodos
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {pluralize(activeCount, ' item')} left
      </span>

      <ul className="filters">
        {['all', 'active', 'completed'].map(filter => (
          <li key={filter}>
            <a
              style={{ cursor: 'pointer' }}
              onClick={() => (onShowTodos(filter), false)}
              className={classNames({ selected: showTodos === filter })}>
              {filter[0].toUpperCase()}{filter.substring(1)}
            </a>
          </li>
        ))}
      </ul>

      {completedCount > 0 ? (
        <button
          className="clear-completed"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}
