import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CyberSqueak from './CyberSqueak'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CyberSqueak/>
  )
}

export default App
