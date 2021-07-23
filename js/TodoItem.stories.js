import React from 'react';
import TodoItem from './TodoItem';

export default {
  title: 'TodoItem',
  component: TodoItem
};

const Template = args => (
  <section className="main">
    <ul className="todo-list">
      <TodoItem {...args}/>
    </ul>
  </section>
);

Template.args = {
  onEdit: () => {},
  onToggle: () => {},
  onCancel: () => {},
  onSave: () => {},
  onDestroy: () => {}
};

export const Active = Template.bind({});

Active.args = {
  ...Template.args,
  title: 'Active todo!'
};

export const Completed = Template.bind({});

Completed.args = {
  ...Template.args,
  title: 'Completed todo!',
  completed: true
};

export const Editing = Template.bind({});

Editing.args = {
  ...Template.args,
  title: 'Editing todo!',
  editing: true
};
