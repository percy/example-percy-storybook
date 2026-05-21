// PER-8195 Phase 1 — storybook advanced example.
// Each named story exercises one row of the Advanced Feature Matrix via
// `parameters.percy`. See ../matrix.yml for the canonical mapping.

import React from 'react'
import TodoApp from '../../js/TodoApp'

export default {
  title: 'Advanced/TodoApp',
  component: TodoApp,
}

const sampleTodos = [
  { title: 'Buy milk', completed: false },
  { title: 'Walk the dog', completed: false },
  { title: 'Pay bills', completed: true },
]

const Template = (args) => <TodoApp {...args} />

// Row: storybook_parameters_percy — every story below sets at least one knob.
// Row: widths — per-story widths override
export const Widths = Template.bind({})
Widths.args = { todos: sampleTodos, showTodos: 'all' }
Widths.parameters = {
  percy: { widths: [375, 768, 1280, 1920] },
}

// Row: percy_css — per-story percyCSS override
export const PercyCSS = Template.bind({})
PercyCSS.args = { todos: sampleTodos }
PercyCSS.parameters = {
  percy: {
    percyCSS: '.todo-list li { background: #fffde7 !important; }',
  },
}

// Row: min_height — per-story minHeight
export const MinHeight = Template.bind({})
MinHeight.args = { todos: sampleTodos }
MinHeight.parameters = {
  percy: { minHeight: 2000 },
}

// Row: enable_javascript — per-story enableJavaScript
export const EnableJavaScript = Template.bind({})
EnableJavaScript.args = { todos: sampleTodos }
EnableJavaScript.parameters = {
  percy: { enableJavaScript: true },
}

// Row: responsive_snapshot_capture
export const ResponsiveCapture = Template.bind({})
ResponsiveCapture.args = { todos: sampleTodos }
ResponsiveCapture.parameters = {
  percy: { responsiveSnapshotCapture: true, widths: [375, 1280] },
}

// Row: storybook_additional_snapshots — args + suffix variants
export const Variants = Template.bind({})
Variants.args = { todos: sampleTodos, showTodos: 'all' }
Variants.parameters = {
  percy: {
    additionalSnapshots: [
      { suffix: ' - Active', args: { showTodos: 'active' } },
      { suffix: ' - Completed', args: { showTodos: 'completed' } },
      { suffix: ' - Empty', args: { todos: [] } },
    ],
  },
}

// Row: storybook_args_override — parameters.percy.args overrides at snapshot time
export const ArgsOverride = Template.bind({})
ArgsOverride.args = { todos: sampleTodos, showTodos: 'all' }
ArgsOverride.parameters = {
  percy: {
    args: { showTodos: 'completed' },
  },
}

// Row: storybook_query_params — additional URL search params
export const QueryParams = Template.bind({})
QueryParams.args = { todos: sampleTodos }
QueryParams.parameters = {
  percy: {
    queryParams: { theme: 'dark', locale: 'en-US' },
  },
}

// Row: storybook_name_override
export const NameOverride = Template.bind({})
NameOverride.args = { todos: sampleTodos }
NameOverride.parameters = {
  percy: { name: 'Advanced/TodoApp/Custom Snapshot Name' },
}

// Row: storybook_skip — the SDK skips this story; no snapshot is posted.
export const Skip = Template.bind({})
Skip.args = { todos: sampleTodos }
Skip.parameters = {
  percy: { skip: true },
}
