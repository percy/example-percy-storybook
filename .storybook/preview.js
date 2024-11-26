import 'todomvc-app-css/index.css';

export const decorators = [
  Story => (
    <section className="todoapp">
      <Story/>
    </section>
  )
];

export const parameters = {
  layout: 'none'
};
export const tags = ['autodocs'];
