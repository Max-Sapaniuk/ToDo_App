import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import {Provider} from "react-redux";
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <CssBaseline />
          <App />
      </Provider>
  </React.StrictMode>
);