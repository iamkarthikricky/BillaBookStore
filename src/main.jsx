import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import storeManager from './redux/storeManager';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={storeManager}>
  <App />
</Provider>
  </StrictMode>,

)
