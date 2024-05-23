import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [modeTog, setModeTog] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setModeTog(!modeTog)
  }

  return (
    <>
    <div className="body">
      
      <div onClick={toggleDarkMode} className={`mode-tog ${darkMode ? 'active' : ''}`}></div>
      <div className="container">
        <div className={`dark-mode ${darkMode ? 'active' : ''}`}></div>
      </div>

      <h1>dark mode</h1>
    </div>
    </>
  )
}

export default App
