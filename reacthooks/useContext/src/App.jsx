import { useContext } from 'react'
import { ThemeContext } from './components/context/ThemeContext'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="containe">
        <Navbar />
        <Outlet />
      </div>
      </div>
    </>
  )
}

export default App
