import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReduder from './features/user';
import modalClassesReducer from './features/modalClasses';
import selectedHobbiReducer from './features/selectedHobby';
import selectedHobby from './features/selectedHobby';

const store = configureStore({
  reducer: {
    user: userReduder,
    modalClasses: modalClassesReducer,
    selectedHobby: selectedHobbiReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
