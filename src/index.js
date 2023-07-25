import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Pages/Website/Auth.css'
import './css/Components/alerts.css'
import './css/Components/loading.css'
import './css/Components/button.css'
import { BrowserRouter } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </MenuContext>
  </React.StrictMode>
);