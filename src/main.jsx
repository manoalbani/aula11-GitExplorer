import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Repository from './components/Repository.jsx'
import './index.css'
import { BrowserRouter ,Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         
          <Routes>
         <Route path="/" element={<App/>} />
         <Route path="/repo" element={<Repository/>} />
         </Routes>
       
       </BrowserRouter>

  </React.StrictMode>,
)
