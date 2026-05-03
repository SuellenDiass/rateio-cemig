import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'

import {
  RateioProvider
}
from "./context/RateioProvider";

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <RateioProvider>

      <App />

    </RateioProvider>

  </React.StrictMode>

)
