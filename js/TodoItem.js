import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default function TodoItem({
  title,
  completed,
  editing,
  onEdit,
  onToggle,
  onCancel,
  onSave,
  onDestroy
}) {
  let [editText, setEditText] = useState(title);
  let editField = useRef(null);

  let handleSubmit = () => {
    let val = editText.trim();

    if (val) {
      onSave(val);
      setEditText(val);
    } else {
      onDestroy();
    }
  };

  let handleEdit = () => {
    onEdit();
    setEditText(title);
  };

  let handleKeyDown = event => {
    if (event.which === ESCAPE_KEY) {
      setEditText(title);
      onCancel(event);
    } else if (event.which === ENTER_KEY) {
      handleSubmit(event);
    }
  };

  let handleChange = event => {
    if (editing) {
      setEditText(event.target.value);
    }
  };

  useEffect(() => {
    if (editing) {
      let len = editField.current.value.length;
      editField.current.focus();
      editField.current.setSelectionRange(len, len);
    }
  }, [editing]);

  return (
    <li className={classNames({ completed, editing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={onToggle}
        />
        <label onDoubleClick={handleEdit}>
          {title}
        </label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={editField}
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}
