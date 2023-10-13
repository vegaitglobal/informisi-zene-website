import React from 'react';
import router from './router/router'
import { RouterProvider } from 'react-router-dom';
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
