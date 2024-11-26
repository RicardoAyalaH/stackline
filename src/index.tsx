import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app';
import { store } from './app/store';

document.body.innerHTML = '<div id="app"></div>';


const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);