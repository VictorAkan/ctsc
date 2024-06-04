import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import "./styles/tailwind.css"
import "./styles/index.css"
import "./styles/font.css"
import "./styles/nas.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </UserProvider>,
)
