import 'todomvc-app-css/index.css';
import './theme.css';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

export const decorators = [
  (Story, { globals }) => {
    document.documentElement.dataset.theme = globals.theme || 'light';
    return (
      <section className="todoapp">
        <Story/>
      </section>
    );
  }
];

export const globalTypes = {
  theme: {
    description: 'Color theme',
    toolbar: { title: 'Theme', icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true }
  }
};

export const initialGlobals = { theme: 'light' };

export const parameters = {
  layout: 'none',
  viewport: {
    options: {
      ...MINIMAL_VIEWPORTS,
      kiosk: { name: 'Kiosk', styles: { width: '600px', height: '900px' }, type: 'desktop' }
    }
  }
};
export const tags = ['autodocs'];
