import './index.scss';
import { Application } from './Application';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persister, store } from './store/Store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <BrowserRouter>
            <Application />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
