import React from 'react';
import TodoApp from './TodoApp';

export default {
  title: 'Percy Features',
  component: TodoApp,
  args: {
    showTodos: 'all',
    todos: [
      { title: 'Foo', completed: true },
      { title: 'Bar' }
    ]
  }
};

const Template = args => <TodoApp {...args}/>;

// Captured at 320px (Storybook's mobile1) instead of the project widths.
export const MobileViewport = Template.bind({});
MobileViewport.storyName = 'viewport mobile1';
MobileViewport.globals = { viewport: { value: 'mobile1', isRotated: false } };

// Captured at 600px, from the custom "kiosk" option in .storybook/preview.js.
export const KioskViewport = Template.bind({});
KioskViewport.storyName = 'viewport kiosk';
KioskViewport.globals = { viewport: { value: 'kiosk', isRotated: false } };

// A story-level modes list replaces the .percy.yml list, so list dark again next to the
// addon-a11y vision simulator: the red title and green check collapse into similar tones.
export const VisionModes = Template.bind({});
VisionModes.storyName = 'vision modes';
VisionModes.tags = ['visual-smoke'];
VisionModes.parameters = {
  percy: {
    modes: [
      { name: 'dark', globals: { theme: 'dark' } },
      { name: 'deuteranopia', globals: { vision: 'deuteranopia' } }
    ]
  }
};
