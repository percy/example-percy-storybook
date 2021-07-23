import React, { useState, useEffect } from 'react';
import TodoFooter from './TodoFooter';

export default {
  title: 'TodoFooter',
  component: TodoFooter
};

const Template = args => <TodoFooter {...args}/>;

Template.args = {
  activeCount: 0,
  completedCount: 0,
  onShowTodos: () => {},
  onClearCompleted: () => {}
};

export const All = Template.bind({});

All.args = {
  ...Template.args,
  showTodos: 'all',
  activeCount: 5
};

export const Active = Template.bind({});

Active.args = {
  ...Template.args,
  showTodos: 'active',
  activeCount: 1
};

export const Completed = Template.bind({});

Completed.args = {
  ...Template.args,
  showTodos: 'completed',
  completedCount: 1
};
